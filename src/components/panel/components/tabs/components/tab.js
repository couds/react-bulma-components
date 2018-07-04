import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';

const PanelTabsTab = ({
  className,
  renderAs,
  active,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames(className, modifiers.classnames(allProps), {
        'is-active': active,
      })}
    />
  );
};
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
