import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';

const CardHeaderTitle = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element {...props} className={classnames('card-header-title', modifiers.classnames(allProps), className)} />
  );
};

CardHeaderTitle.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardHeaderTitle;
