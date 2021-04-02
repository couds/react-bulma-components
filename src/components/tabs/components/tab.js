import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Tab = ({ children, className, style, active, domRef, ...props }) => (
  <li
    ref={domRef}
    style={style}
    className={classnames(className, {
      'is-active': active,
    })}
  >
    <Element {...props}>{children}</Element>
  </li>
);

Tab.propTypes = {
  ...Element.propTypes,
  active: PropTypes.bool,
};

Tab.defaultProps = {
  renderAs: 'a',
};

export default Tab;
