import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const HeroBody = ({ className, ...props }) => {
  return <Element {...props} className={classnames(className, 'hero-body')} />;
};

HeroBody.defaultProps = {
  renderAs: 'div',
};

HeroBody.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default HeroBody;
