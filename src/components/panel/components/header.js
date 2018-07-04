import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PanelHeader = ({
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('panel-heading', className)}
    />
  );
};

PanelHeader.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelHeader.defaultProps = {
  className: '',
  renderAs: 'div',
};

export default PanelHeader;
