import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Section = ({
  children,
  className,
  style,
  renderAs,
  size,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames('section', className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  size: null,
};

export default Section;
