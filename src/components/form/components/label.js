import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const Label = ({
  children,
  className,
  size,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      {...props}
      className={classnames('label', modifiers.classnames(allProps), className, {
        [`is-${size}`]: size,
      })}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  size: null,
  htmlFor: null,
};

export default Label;
