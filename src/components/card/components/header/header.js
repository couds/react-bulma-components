import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { CardHeaderIcon } from './components/header-icon';
import { CardHeaderTitle } from './components/header-title';

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('card-header', className)} />
));

CardHeader.Title = CardHeaderTitle;

CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardHeader.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'div'
};
