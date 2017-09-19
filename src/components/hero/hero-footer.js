import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeroFooter = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, 'hero-foot')}
    >
      {children}
    </Element>
  );
};

HeroFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

HeroFooter.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroFooter;
