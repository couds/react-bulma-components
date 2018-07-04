import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../../modifiers';

const CardFooterItem = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element {...props} className={classnames('card-footer-item', modifiers.classnames(allProps), className)} />
  );
};

CardFooterItem.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardFooterItem;
