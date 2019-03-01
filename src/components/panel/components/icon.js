import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const PanelIcon = ({
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('panel-icon', className)}
  />
);

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
