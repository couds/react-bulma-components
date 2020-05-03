/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const { Button, Heading } = require('react-bulma-components');

const {
  Container,
  GridBlock,
  MarkdownBlock,
  // eslint-disable-next-line import/no-unresolved
} = require('../../core/CompLibrary.js');

const HomeSplash = ({ siteConfig, language = '' }) => {
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  return (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">
          <div className="projectLogo">
            <img src={`${baseUrl}img/undraw_monitor.svg`} alt="Project Logo" />
          </div>
          <div className="inner">
            <Heading size={2} style={{ marginBottom: 5 }}>
              {siteConfig.title}
            </Heading>
            <small>{siteConfig.tagline}</small>

            <div className="section promoSection">
              <div className="promoRow">
                <Button href={docUrl('doc1.html')}>Try It Out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeSplash.propTypes = {
  siteConfig: PropTypes.shape({
    baseUrl: PropTypes.string.isRequired,
    docsUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
  }).isRequired,
  language: PropTypes.string.isRequired,
};

const Index = ({ config: siteConfig, language = '' }) => {
  const { baseUrl } = siteConfig;

  const FeatureCallout = () => (
    <div
      className="productShowcaseSection paddingBottom"
      style={{ textAlign: 'center' }}
    >
      <h2>Feature Callout</h2>
      <MarkdownBlock>These are features of this project</MarkdownBlock>
    </div>
  );

  const TryOut = () => (
    <Container padding={['bottom', 'top']} id="try">
      <GridBlock
        align="center"
        contents={[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      />
    </Container>
  );

  const Description = () => (
    <Container padding={['bottom', 'top']} background="dark">
      <GridBlock
        align="center"
        contents={[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      />
    </Container>
  );

  const LearnHow = () => (
    <Container padding={['bottom', 'top']} background="light">
      <GridBlock
        align="center"
        contents={[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      />
    </Container>
  );

  const Features = () => (
    <Container padding={['bottom', 'top']}>
      <GridBlock
        align="center"
        contents={[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
        layout="fourColumn"
      />
    </Container>
  );

  const Showcase = () => {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.users
      .filter(user => user.pinned)
      .map(user => (
        <a href={user.infoLink} key={user.infoLink}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      ));

    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    return (
      <div className="productShowcaseSection paddingBottom">
        <h2>Who is Using This?</h2>
        <p>This project is used by all these people</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
          <a className="button" href={pageUrl('users.html')}>
            More {siteConfig.title} Users
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <HomeSplash siteConfig={siteConfig} language={language} />
      <div className="mainContainer">
        <Features />
        <FeatureCallout />
        <LearnHow />
        <TryOut />
        <Description />
        <Showcase />
      </div>
    </div>
  );
};

Index.propTypes = {
  config: PropTypes.shape({
    baseUrl: PropTypes.string,
  }).isRequired,
  language: PropTypes.string.isRequired,
};

module.exports = Index;
