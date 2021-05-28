import classNames from 'classnames';
import React from 'react';
import Element from '../../../element';

const Text = ({ className, ...props }) => {
  return <Element className={classNames('icon-text', className)} {...props} />;
};

Text.defaultProps = {
  renderAs: 'span',
};

export default Text;
