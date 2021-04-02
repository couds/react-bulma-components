import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Content = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={classnames('content', className, {
      [`is-${size}`]: size,
    })}
  >
    {children}
  </Element>
);

Content.propTypes = {
  ...Element.propTypes,
  /**
   * Adjust the size of the content.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Content.defaultProps = {
  ...Element.defaultProps,
};

export default Content;
