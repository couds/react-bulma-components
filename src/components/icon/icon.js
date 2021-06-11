import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from './components/text';

import Element from '../element';

const Icon = ({ size, color, className, align, text, ...props }) => {
  if (text !== undefined) {
    console.warn(
      '[Deprecation] Text prop for Icon Component its deprecated, please use Icon.Text Component instead',
    );
  }
  return (
    <Element
      {...props}
      className={classnames(className, {
        icon: !text,
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color,
        'icon-text': text,
      })}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string,
  ]),
  /**
   * Used when the icon is inside a `Form.Control`
   */
  align: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Icon.defaultProps = {
  renderAs: 'span',
};

Icon.Text = Text;

export default Icon;
