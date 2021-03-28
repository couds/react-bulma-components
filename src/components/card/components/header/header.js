import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardHeaderTitle from './components/header-title';
import CardHeaderIcon from './components/header-icon';

import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const CardHeader = ({ className, ...props }) => (
  <Element {...props} className={classnames('card-header', className)} />
);

CardHeader.Title = CardHeaderTitle;

CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

CardHeader.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
};

export default CardHeader;
