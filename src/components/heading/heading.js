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
}) => {
  const Element = renderAs;
  return (
    <Element
      style={style}
      className={classnames(className, {
        title: !subtitle,
        subtitle,
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
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  subtitle: PropTypes.bool,
};

Section.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'h1',
  size: null,
  subtitle: false,
};

export default Section;
