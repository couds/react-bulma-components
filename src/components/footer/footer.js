import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Footer = ({ className, ...props }) => {
  return <Element {...props} className={classnames('footer', className)} />;
};

Footer.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Footer.defaultProps = {
  renderAs: 'footer',
};

export default Footer;
