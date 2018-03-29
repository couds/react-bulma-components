import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ModalCardBody extends PureComponent {
  static displayName = 'Modal.Card.Body'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
  }

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;
    return (
      <section
        {...props}
        className={classnames('modal-card-body', className)}
      >
        {children}
      </section>
    );
  }
}
