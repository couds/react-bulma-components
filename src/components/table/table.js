import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Footer = ({
  children,
  className,
  style,
  size,
  striped,
  bordered,
}) => (
  <table
    style={style}
    className={classnames('table', className, {
      [`is-${size}`]: size,
      'is-bordered': bordered,
      'is-striped': striped,

    })}
  >
    {children}
  </table>
  );

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['fullwidth', 'narrow']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
};

Footer.defaultProps = {
  children: null,
  className: '',
  style: {},
  size: 'fullwidth',
  striped: true,
  bordered: false,
};

export default Footer;
