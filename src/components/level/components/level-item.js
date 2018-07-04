import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LevelItem = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames('level-item', className, {
      })}
    >
      {children}
    </Element>
  );
};

LevelItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

LevelItem.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default LevelItem;
