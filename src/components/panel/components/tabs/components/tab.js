import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';

const PanelTabsTab = React.forwardRef(({ className, active, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn(className, {
      'is-active': active
    })}
  />
));
PanelTabsTab.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  active: PropTypes.bool
};

PanelTabsTab.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'a',
  active: false
};

export default PanelTabsTab;
