import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../../element';

const ModalCardFoot = ({ children, className, ...props }) => {
  return (
    <Element {...props} className={classnames('modal-card-foot', className)}>
      {children}
    </Element>
  );
};

ModalCardFoot.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

ModalCardFoot.defaultProps = {
  renderAs: 'footer',
};

export default ModalCardFoot;
