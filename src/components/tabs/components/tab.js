import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const Tab = ({
  children,
  className,
  style,
  renderAs,
  active,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <li
      style={style}
      className={classnames(className, modifiers.classnames(allProps), {
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
  ...modifiers.propTypes,
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
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'a',
  active: false,
};

export default Tab;
