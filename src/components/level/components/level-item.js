import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const LevelItem = ({ children, className, ...props }) => (
  <Element {...props} className={classnames('level-item', className, {})}>
    {children}
  </Element>
);

LevelItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
};

LevelItem.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
};

export default LevelItem;
