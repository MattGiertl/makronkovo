const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const collectionPage = path.resolve(`src/pages/kolekcie/index.js`);

  const result = await graphql(`
    {
      allCategoriesJson {
        edges {
          node {
            title
            to
            categoryItems {
              categoryName
              image
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allCategoriesJson.edges.forEach(({ node }) => {
    createPage({
      path: node.to,
      component: collectionPage,
      context: { ...node },
    });
  });
};
