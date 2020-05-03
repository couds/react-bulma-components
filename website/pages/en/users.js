const React = require('react');
const PropTypes = require('prop-types');

// eslint-disable-next-line import/no-unresolved
const { Container } = require('../../core/CompLibrary.js');

const Users = ({ config: siteConfig }) => {
  if (siteConfig.users && siteConfig.users.length === 0) {
    return null;
  }

  const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
  const showcase = siteConfig.users.map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="mainContainer">
      <Container padding={['bottom', 'top']}>
        <div className="showcaseSection">
          <div className="prose">
            <h1>Who is Using This?</h1>
            <p>This project is used by many folks</p>
          </div>
          <div className="logos">{showcase}</div>
          <p>Are you using this project?</p>
          <a href={editUrl} className="button">
            Add your company
          </a>
        </div>
      </Container>
    </div>
  );
};

Users.propTypes = {
  config: PropTypes.shape({
    users: PropTypes.array,
  }).isRequired,
};

module.exports = Users;
