const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const templatePath = 'src/templates';

  const collectionTemplate = path.resolve(`${templatePath}/CollectionTemplate.js`);
  const categoryItemTemplate = path.resolve(`${templatePath}/CategoryItemTemplate.js`);
  const productDetailTemplate = path.resolve(`${templatePath}/ProductDetailTemplate.js`);

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
      allCandyBarsJson {
        edges {
          node {
            title
            to
            products {
              description
              image
              setInfo {
                amount
                size
                unitSize
              }
              title
              to
            }
          }
        }
      }
      allDessertsfolderJson {
        edges {
          node {
            title
            to
            products {
              description
              isSeasonal
              price
              title
              to
              weight
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

  result.data.allDessertsfolderJson.edges.forEach(({ node }) => {
    createPage({
      path: node.to,
      component: categoryItemTemplate,
      context: { ...node },
    });
  });

  result.data.allDessertsfolderJson.edges.forEach(({ node }) => {
    const productCategoryTitle = node.title;
    const products = node.products;

    node.products.map(dessert => {
      const detailPath = `/${node.to}/${dessert.to}`;
      createPage({
        path: detailPath,
        component: productDetailTemplate,
        context: { ...dessert, productCategoryTitle, products },
      });
    });
  });

  result.data.allCandyBarsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.to,
      component: categoryItemTemplate,
      context: { ...node },
    });
  });

  result.data.allCandyBarsJson.edges.forEach(({ node }) => {
    const productCategoryTitle = node.title;
    const products = node.products;

    node.products.map(candyBar => {
      createPage({
        path: candyBar.to,
        component: productDetailTemplate,
        context: { ...candyBar, productCategoryTitle, products },
      });
    });
  });
};
