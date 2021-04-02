import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const CardContent = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-content', className)} />
);

CardContent.propTypes = {};

CardContent.defaultProps = {};

export default CardContent;
