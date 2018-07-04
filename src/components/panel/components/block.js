import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const PanelBlock = ({
  className,
  renderAs,
  active,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('panel-block', className, {
        'is-active': active,
      })}
    />
  );
};

PanelBlock.propTypes = {
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

PanelBlock.defaultProps = {
  className: '',
  renderAs: 'div',
  active: false,
};

export default PanelBlock;
