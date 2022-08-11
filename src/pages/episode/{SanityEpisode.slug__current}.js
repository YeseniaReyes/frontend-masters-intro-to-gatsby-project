/**
 * The curly signify to gatsby, we want 
 * dinamically create the name of this file
 * 
 * So, we're gonna generate the path 
 * based on what is inside here
 * 
 * Use the SanityEpisode 
 * and as the actual name fofr the path
 * use the slug current field
 * double underscore signifies 
 * that we're using a sub field
 * of slug
 */

import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout.js";

export const query = graphql`
  query SanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      title
      description
      slug {
        current
      }
      youtubeID
      date(fromNow: true)
    }
  }
`;

    // data is the result of the query
    export default function SanityEpisode({ data }){
        const episode = data.sanityEpisode;
        return (
            <Layout title={episode.title} description={episode.description}>
              <h1>{episode.title}</h1>
              <p>
                (posted {episode.date}) — {episode.description}
              </p>
              <ul>
                <li>
                  <a href={`https://www.learnwithjason.dev/${episode.slug.current}`}>
                    full episode and details
                  </a>
                </li>
                <li>
                  <a href={`https://youtu.be/${episode.youtubeID}`}>watch on YouTube</a>
                </li>
              </ul>
            </Layout>
          );
        }