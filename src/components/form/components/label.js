import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Label = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('label', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Label.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Label.defaultProps = {
  renderAs: 'label',
};

export default Label;
