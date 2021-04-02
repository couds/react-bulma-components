import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const HeroFooter = ({ children, className, ...props }) => (
  <Element {...props} className={classnames(className, 'hero-foot')}>
    {children}
  </Element>
);

HeroFooter.propTypes = {
  ...Element.propTypes,
};

export default HeroFooter;
