import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const PanelBlock = ({ className, active, ...props }) => (
  <Element
    {...props}
    className={classnames('panel-block', className, {
      'is-active': active,
    })}
  />
);

PanelBlock.propTypes = {
  ...Element.propTypes,
  className: PropTypes.string,
  renderAs: renderAsShape,
  active: PropTypes.bool,
};

PanelBlock.defaultProps = {
  ...Element.defaultProps,
  className: undefined,
  renderAs: 'div',
  active: false,
};

export default PanelBlock;
