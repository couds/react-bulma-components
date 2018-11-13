import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const PanelIcon = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <Element
    {...props}
    ref={ref}
    className={classnames('panel-icon', className)}
  />
));

PanelIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'span',
};

export default PanelIcon;
