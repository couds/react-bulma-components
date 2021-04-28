import React from 'react';
import classnames from 'classnames';

import Element from '../../element';

const LevelItem = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('level-item', className, {})}>
      {children}
    </Element>
  );
};

LevelItem.propTypes = {};

export default LevelItem;
