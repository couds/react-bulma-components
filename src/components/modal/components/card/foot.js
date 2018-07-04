import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';

const ModalCardFoot = ({
  children,
  className,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <footer
      {...props}
      className={classnames('modal-card-foot', modifiers.classnames(allProps), className)}
    >
      {children}
    </footer>
  );
};

ModalCardFoot.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardFoot.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
};

export default ModalCardFoot;
