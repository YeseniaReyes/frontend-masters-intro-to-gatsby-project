module.exports = {
  siteMetadata: {
    siteUrl: 'http://www.yourdomain.tld',
    title: 'Frontend Masters Intro to Gatsby',
    description: 'Frontend Masters Intro to Gatsby course projects',
    image:
      'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    /**
     * if you just put the name of a plugin
     * gatsby will run the plugin with no options
     *
     * If it needs configuration
     * we tell it to resolve the name
     * of the plugin
     * and pass options to it
     */
    /**
     * This set of plugins is to enable
     * creating MDX blog posts from the
     * src/posts folder
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          //by default will grab the layout, but we can add costumozied and will override this
          posts: require.resolve('./src/components/post-layout.js'),
        },
      },
    },
    //end of MDX config
    //images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: "vnkupgyb",
        dataset: "production",
      }
    },
  ],
};
