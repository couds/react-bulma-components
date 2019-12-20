import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

const CardHeaderIcon = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header-icon', className)} />
);

CardHeaderIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardHeaderIcon;
