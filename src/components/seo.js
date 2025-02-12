import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      allSitePage {
        distinct(field: path)
      }
      site(siteMetadata: { title: {}, siteUrl: {}, description: {} }) {
        id
        siteMetadata {
          description
          image
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data.site?.siteMetadata; //by default if don't provide we're going use the metadata from gatsby's config

  const title = props.title || defaults.title; //usamos props para no batallar con title fue recibido y otra vez declarado
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* this solves the problem with trailing slash*/}
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" ccontent={url} />
      <meta property="og:type" ccontent="website" />
      <meta property="og:title" ccontent={title} />
      <meta property="og:description" ccontent="description" />
      {image && <meta name="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
