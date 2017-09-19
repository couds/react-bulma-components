import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TagGroup = ({
  children,
  className,
  style,
  gapless,
}) => (
  <span
    style={style}
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
  style: PropTypes.object,
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  children: null,
  className: '',
  style: {},
  gapless: false,
};

export default TagGroup;
