import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const TagGroup = ({ children, className, gapless, hasAddons, ...props }) => (
  <Element
    {...props}
    className={classnames('tags', className, {
      'has-addons': gapless || hasAddons,
    })}
  >
    {children}
  </Element>
);

TagGroup.propTypes = {
  hasAddons: PropTypes.bool,
  /**
   * deprecated: use hasAddons
   */
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  renderAs: 'span',
};

export default TagGroup;
