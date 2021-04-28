import React from 'react';
import classnames from 'classnames';
import CardFooterItem from './components/footer-item';

import Element from '../../../element';

const CardFooter = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('card-footer', className)} />
  );
};

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {};

CardFooter.defaultProps = {};

export default CardFooter;
