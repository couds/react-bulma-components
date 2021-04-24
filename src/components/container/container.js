import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../element';

const Container = ({ children, max, breakpoint, className, ...props }) => {
  const canSetMax = ['desktop', 'widescreen'].includes(breakpoint);
  return (
    <Element
      {...props}
      className={classnames('container', className, {
        [`is-${canSetMax && max ? 'max-' : ''}${breakpoint}`]: breakpoint,
      })}
    >
      {children}
    </Element>
  );
};

Container.propTypes = {
  /**
   * Specifies the breakpoint at which the container will stop being fullwidth.
   */
  breakpoint: PropTypes.oneOf([
    'mobile',
    'tablet',
    'desktop',
    'widescreen',
    'fullhd',
    'fluid',
  ]),
  /**
   * Only work for `desktop`  and `widescreen` breakpoints, Check the [bulma documentation](https://bulma.io/documentation/layout/container/#overview)
   */
  max: PropTypes.bool,
};

Container.defaultProps = {};

export default Container;
