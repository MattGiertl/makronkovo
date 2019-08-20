const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const collectionPage = path.resolve(`src/pages/kolekcie/index.js`);

  const result = await graphql(`
    {
      allMockJson {
        edges {
          node {
            categories {
              path
              title
              categoryItems {
                categoryName
                image
              }
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

  result.data.allMockJson.edges.forEach(({ node }) => {
    createPage({
      path: node.categories.path,
      component: collectionPage,
      context: { ...node },
    });
  });
};
