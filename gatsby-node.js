const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const templatePath = 'src/templates';

  const collectionTemplate = path.resolve(`${templatePath}/CollectionTemplate.js`);
  const categoryItemTemplate = path.resolve(`${templatePath}/CategoryItemTemplate.js`);
  const productDetailTemplate = path.resolve(`${templatePath}/ProductDetailTemplate.js`);
  // const placeholderTemplate = path.resolve(`${templatePath}/PlaceholderTemplate.js`);

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

  // PLACEHOLDER PAGES FOR DESSERTS AND CANDYBARS
  //   createPage({
  //     path: '/dezerty',
  //     component: placeholderTemplate,
  //     context: {
  //       header: 'DEZERTY',
  //       upperText: 'Stiahnite si náš cennik pre dezerty:',
  //       lowerText:
  //         'V prípade záujmu o odber dezertov pre kaviareň alebo reštauráciu nás prosím priamo ',
  //       anchorText: 'kontaktujte.',
  //       anchorTo: '/kontakt',
  //       link: 'https://drive.google.com/file/d/1zUstZleOQgAc44pQvJ57_KbTVKRvDos5/view?usp=drivesdk',
  //     },
  //   });

  //   createPage({
  //     path: '/candy-bar',
  //     component: placeholderTemplate,
  //     context: {
  //       header: 'CANDY BAR',
  //       upperText: 'Stiahnite si náš cennik pre candy bar:',
  //       lowerText:
  //         'Doprava a aranžovanie candy baru nie je súčasťou ceny dezertov. Doprava 50€ • Aranžovanie 50€',
  //       link: 'https://drive.google.com/file/d/18UpR-87uXENjDBIz5CXZpnB17aD0dMQb/view?usp=drivesdk',
  //     },
  //   });
};
