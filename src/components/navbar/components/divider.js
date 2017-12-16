import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Divider = ({
  style, className,
}) => (
  <div
    style={style}
    className={classnames('navbar-divider', className)}
  />
);

Divider.propTypes = {
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

Divider.defaultProps = {
  style: {},
  className: '',
};

export default Divider;
