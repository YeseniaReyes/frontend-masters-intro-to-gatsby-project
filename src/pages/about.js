import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { Seo } from '../components/seo.js';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

// this tells gatsby that this is a page query
export const query = graphql`
    query cocktailQuery {
      file(name: {eq: "cocktail"}) {
        childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

//and its going to get injected into the component as data
export default function AboutPage({ data }){
    return (
        <Layout
            title="About this site"
            description="More information about this site"
        >
            <GatsbyImage
                image={getImage(data.file)}
                alt="a cocktail set inside an elaborate floral arrangement with dry ice mist"
            />
            <h1>About our site</h1>
            <Link to="/">Back Home</Link>
        </Layout>
    );
}