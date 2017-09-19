import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Footer = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('footer', className)}
    >
      {children}
    </Element>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Footer.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Footer;
