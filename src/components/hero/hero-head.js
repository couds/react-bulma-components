import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeroHead = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, 'hero-head')}
    >
      {children}
    </Element>
  );
};

HeroHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

HeroHead.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroHead;
