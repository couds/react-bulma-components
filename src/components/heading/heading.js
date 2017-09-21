import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Section = ({
  children,
  className,
  style,
  renderAs,
  size,
  subtitle,
  spaced,
  heading,
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, {
        title: !subtitle && !heading,
        subtitle: !heading,
        heading,
        [`is-${size}`]: size,
        'is-spaced': spaced && !subtitle,
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
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subtitle: PropTypes.bool,
  heading: PropTypes.bool,
  spaced: PropTypes.bool,
};

Section.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'h1',
  size: null,
  subtitle: false,
  heading: false,
  spaced: false,
};

export default Section;
