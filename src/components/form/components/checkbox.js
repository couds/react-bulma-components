import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Checkbox = ({
  className,
  style,
  disabled,
  children,
  domRef,
  ...props
}) => {
  return (
    <Element
      renderAs="label"
      domRef={domRef}
      disabled={disabled}
      className={classnames('checkbox', className)}
      style={style}
    >
      <Element type="checkbox" disabled={disabled} {...props} /> {children}
    </Element>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Checkbox.defaultProps = {
  renderAs: 'input',
};

export default Checkbox;
