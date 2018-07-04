import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';

const Content = ({
  children,
  className,
  renderAs,
  size,
  ...allProps
}) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <Element
      {...props}
      className={classnames('content', modifiers.classnames(allProps), className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </Element>
  );
};

Content.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Content.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  size: null,
  renderAs: 'div',
};

export default Content;
