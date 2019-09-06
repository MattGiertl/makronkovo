module.exports = {
  siteMetadata: {
    title: 'Makronkovo',
    description:
      'Torty na mieru, dezerty a candy bary ktoré spôsobujú závislosti. To je Makronkovo, cukrárska manufaktúra v Banskej Bystrici.',
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/`,
        name: 'mainpage',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/banner/`,
        name: 'banner',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/discounts/`,
        name: 'discounts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/offers/`,
        name: 'offers',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/references/`,
        name: 'references',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/mainpage/team/`,
        name: 'team',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/gallery`,
        name: 'galleryData',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/candybar`,
        name: 'candyBarData',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: '3265946889.1677ed0.d9aef6cd62c44e4ba81bf45683c2952d',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Makronkovo',
        short_name: 'Makronkovo',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#FCDFEB',
        display: 'standalone',
        icon: 'static/assets/makronkovo_favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-json`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
