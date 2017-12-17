import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ModalCardBody extends PureComponent {
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
      style,
    } = this.props;
    return (
      <section
        style={style}
        className={classnames('modal-card-body', className)}
      >
        {children}
      </section>
    );
  }
}
