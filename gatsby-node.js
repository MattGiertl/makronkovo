const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const collectionPage = path.resolve(`src/pages/kolekcie/index.js`);

  const result = await graphql(`
    {
      allMockJson {
        nodes {
          categories {
            dessertCategory {
              categoryItems {
                categoryName
                image
              }
              path
              title
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

  console.log(result);

  createPage({
    path: '/dezerty',
    component: collectionPage,
    context: { boa: 'krista', result },
  });

  // result.data.allMockJson.nodes.forEach(({ node }) => {
  //   createPage({
  //     path: '/dezerty',
  //     component: collectionPage,
  //     context: { node },
  //   });
  // });
};
