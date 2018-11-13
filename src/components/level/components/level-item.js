import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const LevelItem = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('level-item', className, {
    })}
  >
    {children}
  </Element>
));

LevelItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

LevelItem.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
};

export default LevelItem;
