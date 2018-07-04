import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

import CONSTANTS from '../../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

const Help = ({
  className,
  children,
  color,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <p
      {...props}
      className={classnames('help', modifiers.classnames(allProps), className, {
        [`is-${color}`]: color,
      })}
    >
      {children}
    </p>
  );
};

Help.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  children: PropTypes.node,
};

Help.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  color: null,
};

export default Help;
