import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const ListItem = ({
  children,
  className,
  active,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('list-item', className, {
      'is-active': active,
    })}
  >
    {children}
  </Element>
);

ListItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

ListItem.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default ListItem;
