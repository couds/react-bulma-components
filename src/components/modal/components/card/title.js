import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardTitle = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('modal-card-title', className)}>
      {children}
    </Element>
  );
};

ModalCardTitle.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ModalCardTitle.defaultProps = {
  renderAs: 'p',
};

export default ModalCardTitle;
