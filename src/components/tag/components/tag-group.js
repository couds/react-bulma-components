import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TagGroup = ({
  children,
  className,
  gapless,
  ...props
}) => (
  <span
    {...props}
    className={classnames('tags', className, {
      'has-addons': gapless,
    })}
  >
    {children}
  </span>
);

TagGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  children: null,
  className: '',
  style: {},
  gapless: false,
};

export default TagGroup;
