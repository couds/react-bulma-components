import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const Tab = ({ children, className, style, active, domRef, ...props }) => (
  <li
    ref={domRef}
    style={style}
    className={classnames(className, {
      'is-active': active,
    })}
  >
    <Element {...props}>{children}</Element>
  </li>
);

Tab.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  active: PropTypes.bool,
};

Tab.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'a',
  active: false,
};

export default Tab;
