import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroFooter = ({ className, ...props }) => {
  return <Element {...props} className={classnames(className, 'hero-foot')} />;
};

HeroFooter.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

HeroFooter.defaultProps = {
  renderAs: 'footer',
};

export default HeroFooter;
