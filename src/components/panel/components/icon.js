import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PanelIcon = ({
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('panel-icon', className)}
    />
  );
};

PanelIcon.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelIcon.defaultProps = {
  className: '',
  renderAs: 'span',
};

export default PanelIcon;
