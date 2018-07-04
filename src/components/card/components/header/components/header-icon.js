import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';

const CardHeaderIcon = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element {...props} className={classnames('card-header-icon', modifiers.classnames(allProps), className)} />
  );
};


CardHeaderIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardHeaderIcon;
