import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Tab = ({
  children,
  className,
  style,
  renderAs,
  active,
  ...props
}) => {
  const Element = renderAs;
  return (
    <li
      style={style}
      className={classnames(className, {
        'is-active': active,
      })}
    >
      <Element {...props}>
        {children}
      </Element>
    </li>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

Tab.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  active: false,
};

export default Tab;
