import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardFooterItem from './components/footer-item';
import modifiers from '../../../../modifiers';

const CardFooter = ({
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element {...props} className={classnames('card-footer', modifiers.classnames(allProps), className)} />
  );
};

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
};

export default CardFooter;
