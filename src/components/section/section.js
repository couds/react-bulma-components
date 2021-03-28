import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';
import renderAsShape from '../../modifiers/render-as';

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
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  size: PropTypes.oneOf(['medium', 'large']),
};

Section.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'section',
  size: undefined,
};

export default Section;
