import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';

const ModalCardTitle = ({
  children,
  className,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <p
      {...props}
      className={classnames('modal-card-title', modifiers.classnames(allProps), className)}
    >
      {children}
    </p>
  );
};

ModalCardTitle.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
};

export default ModalCardTitle;
