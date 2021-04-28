import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroHeader = ({ className, ...props }) => {
  return <Element {...props} className={classnames(className, 'hero-head')} />;
};

HeroHeader.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

HeroHeader.defaultProps = {
  renderAs: 'header',
};

export default HeroHeader;
