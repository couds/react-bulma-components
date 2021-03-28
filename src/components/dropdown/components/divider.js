import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const DropdownDivider = ({ className, ...props }) => (
  <Element {...props} className={classnames('dropdown-divider', className)} />
);

DropdownDivider.propTypes = {
  ...Element.propTypes,
  style: PropTypes.shape({}),
  /**
   * Additional CSS classes to pass to `<Dropdown.Divider />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
};

DropdownDivider.defaultProps = {
  ...Element.defaultProps,
  style: undefined,
  className: undefined,
  renderAs: 'hr',
};

export default DropdownDivider;
