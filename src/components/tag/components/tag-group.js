import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../modifiers';
import Element from '../../element';

const TagGroup = ({ children, className, gapless, ...props }) => (
  <Element
    renderAs="span"
    {...props}
    className={classnames('tags', className, {
      'has-addons': gapless,
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
  gapless: PropTypes.bool,
};

TagGroup.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  gapless: false,
};

export default TagGroup;
