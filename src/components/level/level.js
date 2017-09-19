import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';


const Level = ({
  children,
  className,
  style,
  renderAs,
  align,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, {
        [`level-${align}`]: align,
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
  align: PropTypes.string,
};

Level.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: 'left',
};

export default Level;
