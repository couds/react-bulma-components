import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';

const TagGroup = ({
  children,
  className,
  gapless,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      className={classnames('tags', modifiers.classnames(allProps), className, {
        'has-addons': gapless,
      })}
    >
      {children}
    </span>
  );
};

TagGroup.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
  gapless: false,
};

export default TagGroup;
