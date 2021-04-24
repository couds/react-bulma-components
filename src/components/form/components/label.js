import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import useFieldContext from './field/context';

const Label = ({ children, className, size, ...props }) => {
  const context = useFieldContext();
  const calculatedSize = size || context.size;
  return (
    <Element
      {...props}
      className={classnames('label', className, {
        [`is-${calculatedSize}`]: calculatedSize,
      })}
    >
      {children}
    </Element>
  );
};

Label.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Label.defaultProps = {
  renderAs: 'label',
};

export default Label;
