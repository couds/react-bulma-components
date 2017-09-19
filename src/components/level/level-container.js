import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../constants';

const breakpoints = [null].concat(Object.keys(CONSTANTS.BREAKPOINTS).map(key => CONSTANTS.BREAKPOINTS[key]));

const LevelContainer = ({
  children,
  className,
  style,
  breakpoint,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('level', className, {
        [`is-${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

LevelContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoint: PropTypes.oneOf([breakpoints]),
  renderAs: PropTypes.string,
};

LevelContainer.defaultProps = {
  children: null,
  className: '',
  style: {},
  breakpoint: null,
  renderAs: 'div',
};

export default LevelContainer;
