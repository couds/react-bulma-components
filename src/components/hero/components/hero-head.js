import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const HeroHead = ({ children, className, ...props }) => (
  <Element {...props} className={classnames(className, 'hero-head')}>
    {children}
  </Element>
);

HeroHead.propTypes = {
  ...Element.propTypes,
};

export default HeroHead;
