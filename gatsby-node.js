const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const templatePath = 'src/templates';

  const collectionTemplate = path.resolve(`${templatePath}/CollectionTemplate.js`);
  const categoryItemTemplate = path.resolve(`${templatePath}/CategoryItemTemplate.js`);
  const dessertDetailTemplate = path.resolve(`${templatePath}/DessertDetailTemplate.js`);

  const result = await graphql(`
    {
      allCategoriesJson {
        edges {
          node {
            boldText
            lightText
            title
            to
            categoryItems {
              categoryName
              image
              to
            }
          }
        }
      }
      allDessertsJson {
        edges {
          node {
            to
            title
            items {
              description
              image
              isSeasonal
              newPrice
              oldPrice
              title
              to
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

  result.data.allDessertsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.to,
      component: categoryItemTemplate,
      context: { ...node },
    });
  });

  result.data.allDessertsJson.edges.forEach(({ node }) => {
    const productCategoryTitle = node.title;
    // const moreProducts = [];

    // for (let i = 0; i < array.length; i++) {
    //   moreProducts.append(node.items[i]);
    // }

    node.items.map(dessert => {
      createPage({
        path: dessert.to,
        component: dessertDetailTemplate,
        context: { ...dessert, productCategoryTitle },
      });
    });
  });
};
