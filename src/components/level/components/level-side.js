import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';
import renderAsShape from '../../../modifiers/render-as';

const LevelSide = ({ children, className, align, ...props }) => (
  <Element
    {...props}
    className={classnames(className, {
      [`level-${align}`]: align,
    })}
  >
    {children}
  </Element>
);

LevelSide.propTypes = {
  ...Element.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  align: PropTypes.string,
};

LevelSide.defaultProps = {
  ...Element.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: 'left',
};

export default LevelSide;
