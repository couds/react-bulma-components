import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

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
  align: PropTypes.string,
};

LevelSide.defaultProps = {
  align: 'left',
};

export default LevelSide;
