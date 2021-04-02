import React from 'react';
import classnames from 'classnames';
import CardHeaderTitle from './components/header-title';
import CardHeaderIcon from './components/header-icon';

import Element from '../../../element';

const CardHeader = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header', className)} />
);

CardHeader.Title = CardHeaderTitle;

CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {
  ...Element.propTypes,
};

CardHeader.defaultProps = {
  ...Element.defaultProps,
};

export default CardHeader;
