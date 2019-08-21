const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const collectionTemplate = path.resolve(`src/components/templates/CollectionTemplate.js`);

  const result = await graphql(`
    {
      allCategoriesJson {
        nodes {
          title
          to
          categoryItems {
            categoryName
            image
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allCategoriesJson.nodes.forEach(({ node }) => {
    createPage({
      path: node.to,
      component: collectionTemplate,
      context: { ...node },
    });
  });
};
