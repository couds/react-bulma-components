import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const HeroBody = ({ children, className, ...props }) => (
  <Element {...props} className={classnames(className, 'hero-body')}>
    {children}
  </Element>
);

HeroBody.propTypes = {
  ...Element.propTypes,
};

export default HeroBody;
