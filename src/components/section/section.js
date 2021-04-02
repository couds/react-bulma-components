import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Section = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('section', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Section.propTypes = {
  ...Element.propTypes,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  renderAs: 'section',
};

export default Section;
