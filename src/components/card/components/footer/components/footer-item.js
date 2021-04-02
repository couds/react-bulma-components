import React from 'react';
import classnames from 'classnames';
import Element from '../../../../element';

const CardFooterItem = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-footer-item', className)} />
);

CardFooterItem.propTypes = {
  ...Element.propTypes,
};

CardFooterItem.defaultProps = {
  ...Element.defaultProps,
};

export default CardFooterItem;
