import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Level = ({
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

Level.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

Level.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Level;
