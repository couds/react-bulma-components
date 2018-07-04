import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PanelTabsTab = ({
  className,
  renderAs,
  active,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames(className, {
        'is-active': active,
      })}
    />
  );
};
PanelTabsTab.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

PanelTabsTab.defaultProps = {
  className: '',
  renderAs: 'a',
  active: false,
};

export default PanelTabsTab;
