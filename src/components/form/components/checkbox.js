import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Checkbox = ({
  className,
  style,
  disabled,
  children,
  checked,
  domRef,
  ...props
}) => (
  <Element
    renderAs="label"
    domRef={domRef}
    disabled={disabled}
    className={classnames('checkbox', className)}
    style={style}
  >
    <Element type="checkbox" disabled={disabled} {...props} />
    {children}
  </Element>
);

Checkbox.propTypes = {
  ...Element.propTypes,
  /**
   * Whether this checkbox is disabled.
   */
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  ...Element.defaultProps,
  renderAs: 'input',
};

export default Checkbox;
