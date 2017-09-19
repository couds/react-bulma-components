import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const HeroBody = ({
  children,
  className,
  style,
  renderAs,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, 'hero-body')}
    >
      {children}
    </Element>
  );
};

HeroBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
};

HeroBody.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default HeroBody;
