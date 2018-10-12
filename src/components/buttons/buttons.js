import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Buttons = ({
  children,
  className,
  hasAddons,
  position,
  ...allProps
}) => (
  <div
    {...modifiers.clean(allProps)}
    className={classnames('buttons', className, modifiers.classnames(allProps), {
      'has-addons': hasAddons,
      [`is-${[position]}`]: position,
    })}
  >
    {children}
  </div>
);

Buttons.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  hasAddons: PropTypes.bool,
  position: PropTypes.oneOf([null, 'centered', 'right']),
};

Buttons.defaultProps = {
  className: '',
  hasAddons: false,
  position: null,
};

export default Buttons;
