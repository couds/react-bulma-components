import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Section = ({
  children,
  className,
  renderAs,
  size,
  ...props
}) => {
  const Element = renderAs;
  return (
    <Element
      {...props}
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
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'section',
  size: null,
};

export default Section;
