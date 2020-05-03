const React = require('react');
const PropTypes = require('prop-types');

const Footer = ({ config, language = '' }) => {
  const { baseUrl, docsUrl } = config;

  const docUrl = doc => {
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  };

  const pageUrl = doc => baseUrl + (language ? `${language}/` : '') + doc;

  return (
    <footer className="nav-footer" id="footer">
      <section className="sitemap">
        <a href={config.baseUrl} className="nav-home">
          {config.footerIcon && (
            <img
              src={config.baseUrl + config.footerIcon}
              alt={config.title}
              width="66"
              height="58"
            />
          )}
        </a>
        <div>
          <h5>Docs</h5>
          <a href={docUrl('doc1.html')}>
            Getting Started (or other categories)
          </a>
          <a href={docUrl('doc2.html', language)}>
            Guides (or other categories)
          </a>
          <a href={docUrl('doc3.html', language)}>
            API Reference (or other categories)
          </a>
        </div>
        <div>
          <h5>Community</h5>
          <a href={pageUrl('users.html', language)}>User Showcase</a>
          <a
            href="https://stackoverflow.com/questions/tagged/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stack Overflow
          </a>
          <a href="https://discordapp.com/">Project Chat</a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Twitter
          </a>
        </div>
        <div>
          <h5>More</h5>
          <a href={`${config.baseUrl}blog`}>Blog</a>
          <a href="https://github.com/">GitHub</a>
          <a
            className="github-button"
            href={config.repoUrl}
            data-icon="octicon-star"
            data-count-href="/facebook/docusaurus/stargazers"
            data-show-count="true"
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
          {config.twitterUsername && (
            <div className="social">
              <a
                href={`https://twitter.com/${config.twitterUsername}`}
                className="twitter-follow-button"
              >
                Follow @{config.twitterUsername}
              </a>
            </div>
          )}
          {config.facebookAppId && (
            <div className="social">
              <div
                className="fb-like"
                data-href={config.url}
                data-colorscheme="dark"
                data-layout="standard"
                data-share="true"
                data-width="225"
                data-show-faces="false"
              />
            </div>
          )}
        </div>
      </section>

      <a
        href="https://opensource.facebook.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="fbOpenSource"
      >
        <img
          src={`${config.baseUrl}img/oss_logo.png`}
          alt="Facebook Open Source"
          width="170"
          height="45"
        />
      </a>
      <section className="copyright">{config.copyright}</section>
    </footer>
  );
};

Footer.propTypes = {
  config: PropTypes.shape({
    baseUrl: PropTypes.string.isRequired,
    docsUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    footerIcon: PropTypes.string,
    twitterUsername: PropTypes.string,
    facebookAppId: PropTypes.string,
  }).isRequired,
  language: PropTypes.string,
};

Footer.defaultProps = {
  language: undefined,
};

module.exports = Footer;
