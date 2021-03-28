import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Element from '../../../../element';
import renderAsShape from '../../../../../modifiers/render-as';

const CardFooterItem = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-footer-item', className)} />
);

CardFooterItem.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardFooterItem.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardFooterItem;
