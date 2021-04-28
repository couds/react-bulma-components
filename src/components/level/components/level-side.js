import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const LevelSide = ({ className, align, ...props }) => {
  return (
    <Element
      {...props}
      className={classnames(className, {
        [`level-${align}`]: align,
      })}
    />
  );
};

LevelSide.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

LevelSide.defaultProps = {
  align: 'left',
};

export default LevelSide;
