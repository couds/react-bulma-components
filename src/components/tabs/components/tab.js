import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const Tab = ({ children, className, style, active, domRef, ...props }) => {
  return (
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
};

Tab.propTypes = {
  active: PropTypes.bool,
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Tab.defaultProps = {
  renderAs: 'a',
};

export default Tab;
