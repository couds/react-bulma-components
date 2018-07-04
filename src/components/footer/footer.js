import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Footer = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('footer', className)}
    >
      {children}
    </Element>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Footer.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Footer;
