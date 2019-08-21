const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const collectionTemplate = path.resolve(`src/templates/CollectionTemplate.js`);

  const result = await graphql(`
    {
      allCategoriesJson {
        edges {
          node {
            title
            to
            lightText
            boldText
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
      component: collectionTemplate,
      context: { ...node },
    });
  });
};
