import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardHeaderTitle from './components/header-title';
import CardHeaderIcon from './components/header-icon';
import modifiers from '../../../../modifiers';

const CardHeader = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element {...props} className={classnames('card-header', modifiers.classnames(allProps), className)} />
  );
};

CardHeader.Title = CardHeaderTitle;

CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardHeader.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardHeader;
