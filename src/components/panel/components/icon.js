import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const PanelIcon = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('panel-icon', modifiers.classnames(allProps), className)}
    />
  );
};

PanelIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'span',
};

export default PanelIcon;
