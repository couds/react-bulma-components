const React = require('react');
const PropTypes = require('prop-types');

// eslint-disable-next-line import/no-unresolved
const { Container, GridBlock } = require('../../core/CompLibrary.js');

const Help = ({ config: siteConfig, language = '' }) => {
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'doc1.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project',
      title: 'Join the community',
    },
    {
      content: "Find out what's new with this project",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
};

Help.propTypes = {
  config: PropTypes.shape({
    baseUrl: PropTypes.string,
    docsUrl: PropTypes.string,
  }).isRequired,
  language: PropTypes.string.isRequired,
};

module.exports = Help;
