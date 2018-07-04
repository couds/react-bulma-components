import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../../../modifiers';

const ModalCardBody = ({
  children,
  className,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <section
      {...props}
      className={classnames('modal-card-body', modifiers.classnames(allProps), className)}
    >
      {children}
    </section>
  );
};

ModalCardBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  style: {},
};

export default ModalCardBody;
