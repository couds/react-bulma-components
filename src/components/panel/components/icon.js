import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const PanelIcon = ({ className, ...props }) => (
  <Element {...props} className={classnames('panel-icon', className)} />
);

PanelIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
};

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  renderAs: 'span',
};

export default PanelIcon;
