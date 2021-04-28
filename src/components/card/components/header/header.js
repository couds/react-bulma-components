import React from 'react';
import classnames from 'classnames';
import CardHeaderTitle from './components/header-title';
import CardHeaderIcon from './components/header-icon';

import Element from '../../../element';

const CardHeader = ({ className, ...props }) => {
  return (
    <Element {...props} className={classnames('card-header', className)} />
  );
};

CardHeader.Title = CardHeaderTitle;

CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {};

CardHeader.defaultProps = {};

export default CardHeader;
