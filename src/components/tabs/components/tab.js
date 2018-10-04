import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const Tab = ({
  children,
  className,
  style,
  active,
  ...props
}) => (
  <li
    style={style}
    className={classnames(className, {
      'is-active': active,
    })}
  >
    <Element {...props}>
      {children}
    </Element>
  </li>
);

Tab.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

Tab.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  active: false,
};

export default Tab;
