import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeroFooter = ({
  children,
  className,
  renderAs,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
      className={classnames(className, 'hero-foot')}
    >
      {children}
    </Element>
  );
};

HeroFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

HeroFooter.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroFooter;
