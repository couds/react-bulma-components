import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Button from 'react-bulma-components/lib/components/button';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import H from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Columns from 'react-bulma-components/lib/components/columns';


import styles from './styles.module.css'; 

const features = [
  {
    title: <>Responsive</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Made for Mobile first
      </>
    ),
  },
  {
    title: <>Open Source</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        As Bulma, this library is open source and can be used anywhere
      </>
    ),
  },
  {
    title: <>Light weight</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        No external dependencies.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Columns.Column textAlignment="centered" size={4}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <H size={4}>{title}</H>
      <p>{description}</p>
    </Columns.Column>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout 
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <Hero color="primary">
        <Container>
          <H>{siteConfig.title}</H>
          <H subtitle>{siteConfig.tagline}</H>
          <Button.Group position="centered">
            <Button rounded renderAs={Link} to={useBaseUrl('docs/getting-started/install')}>
              Get Started
            </Button>
          </Button.Group>
        </Container>
      </Hero>
      <main>
        {features && features.length && (
          <Container>
            <Columns>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </Columns>
          </Container>
        )}
      </main>
    </Layout>
  );
}

export default Home;
