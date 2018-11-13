import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const PanelBlock = React.forwardRef(({
  className,
  active,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('panel-block', className, {
      'is-active': active,
    })}
  />
));

PanelBlock.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
};

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'div',
  active: false,
};

export default PanelBlock;
