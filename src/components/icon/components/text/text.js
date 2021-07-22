import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Element from '../../../element';

const Text = ({ className, ...props }) => {
  return <Element className={classNames('icon-text', className)} {...props} />;
};

Text.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

Text.defaultProps = {
  renderAs: 'span',
};

export default Text;
