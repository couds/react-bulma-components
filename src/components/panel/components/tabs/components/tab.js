import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';

const PanelTabsTab = ({
  className,
  active,
  ...props
}) => (
  <Element
    {...props}
    className={classnames(className, {
      'is-active': active,
    })}
  />
);
PanelTabsTab.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

PanelTabsTab.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'a',
  active: false,
};

export default PanelTabsTab;
