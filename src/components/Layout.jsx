import React from 'react';
import { graphql } from 'gatsby';

const Layout = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <header>
        <h1>A website!</h1>
      </header>
      <main>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <footer>
        <p>&copy; Raúl R. Pearson</p>
      </footer>
    </div>
  );
};

export default Layout;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
