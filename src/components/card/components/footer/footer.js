import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardFooterItem from './components/footer-item';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const CardFooter = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-footer', className)} />
);

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardFooter.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardFooter;
