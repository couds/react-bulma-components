import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';
import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

const CardHeaderTitle = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header-title', className)} />
);

CardHeaderTitle.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardHeaderTitle;
