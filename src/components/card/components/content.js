import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const CardContent = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-content', className)} />
);

CardContent.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardContent.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardContent;
