import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const TagGroup = ({ children, className, gapless, hasAddons, ...props }) => (
  <Element
    renderAs="span"
    {...props}
    className={classnames('tags', className, {
      'has-addons': gapless || hasAddons,
    })}
  >
    {children}
  </Element>
);

TagGroup.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  hasAddons: PropTypes.bool,
  /**
   * deprecated: use hasAddons
   */
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  hasAddons: undefined,
  gapless: undefined,
};

export default TagGroup;
