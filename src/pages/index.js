import * as React from 'react';
import {
  Link,
  StaticQuery,
  graphql,
  useScrollRestoration,
  useStaticQuery,
} from 'gatsby';
import Layout from '../components/layout.js';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query getBlogPosts {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
      allSanityEpisode(
        filter: {id: {ne: null}}
        sort: {order: DESC, fields: date}
        limit: 20
      ) {
        nodes {
          id
          title
          gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  const episodes = data.allSanityEpisode.nodes;

  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused"
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello Frontend masters</h1>
      <Link to="/about">About this site</Link>
      <h2>Check out my recent blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>
            {` `}
            <small>posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
      <h2>
        Latest episodes of <em>Learn With Jason</em>
      </h2>
      <ul>
          {episodes.map((episode) => (
            <l1 key={episode.id}>
              <Link to={episode.gatsbyPath}>{episode.title} (with {episode.guest?.[0]?.name})</Link>
            </l1>
          ))}
      </ul>
      <a href="https://www.learnwithjason.dev/">
        Watch all episodes of <em>Learn With Json</em>
      </a>
    </Layout>
  );
}
