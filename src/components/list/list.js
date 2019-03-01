import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

import ListItem from './components/list-item';

const List = ({
  children,
  className,
  hoverable,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('list', className, {
      'is-hoverable': hoverable,
    })}
  >
    {children}
  </Element>
);

List.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

List.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

List.Item = ListItem;

export default List;
