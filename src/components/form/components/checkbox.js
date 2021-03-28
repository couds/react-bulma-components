import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

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
   * A React node that displays the label of this checkbox.
   */
  children: PropTypes.node,
  /**
   * Additional CSS classes to be passed to `<Checkbox />`.
   * They will sit alongside pre-applied Bulma classes.
   */
  className: PropTypes.string,
  /**
   * Whether this checkbox is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * A custom component that the checkbox input should be rendered as.
   * Does not affect the label.
   */
  renderAs: renderAsShape,
  style: PropTypes.shape({}),
};

Checkbox.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  disabled: undefined,
  renderAs: 'input',
};

export default Checkbox;
