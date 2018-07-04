import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeroHead = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames(className, 'hero-head')}
    >
      {children}
    </Element>
  );
};


HeroHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

HeroHead.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroHead;
