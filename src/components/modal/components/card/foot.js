import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ModalCardFoot = ({
  children,
  className,
  style,
}) => (
  <footer
    style={style}
    className={classnames('modal-card-foot', className)}
  >
    {children}
  </footer>
);

ModalCardFoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

ModalCardFoot.defaultProps = {
  children: null,
  className: '',
  style: {},
};

export default ModalCardFoot;
