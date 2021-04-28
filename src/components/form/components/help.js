import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Help = ({ className, children, color, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames('help', className, {
        [`is-${color}`]: color,
      })}
    >
      {children}
    </Element>
  );
};

Help.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Help.defaultProps = {
  renderAs: 'p',
};

export default Help;
