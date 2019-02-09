import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Loader = React.forwardRef(({ overlay, onClick, className, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('loader', className, {
      'is-overlay': overlay
    })}
  >
    <div className="loader-background" onClick={onClick} />
    <div className="loader-icon" />
  </Element>
));

Loader.propTypes = {
  ...modifiers.propTypes,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Loader.defaultProps = {
  ...modifiers.defaultProps,
  overlay: false,
  className: '',
  style: {},
  renderAs: 'div'
};
