import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LevelItem = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
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
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

LevelItem.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default LevelItem;
