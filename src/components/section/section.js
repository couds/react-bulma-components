import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Section = ({ children, className, size, ...props }) => {
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
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Section.defaultProps = {
  renderAs: 'section',
};

export default Section;
