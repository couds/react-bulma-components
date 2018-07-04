import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Footer = ({
  children,
  className,
  renderAs,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('footer', modifiers.classnames(allProps), className)}
    >
      {children}
    </Element>
  );
};

Footer.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Footer.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default Footer;
