import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../../button';

export default class ModalCardHead extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    showClose: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    showClose: true,
    onClose: null,
  }

  render() {
    const {
      children,
      className,
      style,
      showClose,
      onClose,
    } = this.props;

    return (
      <header
        style={style}
        className={classnames('modal-card-head', className)}
      >
        {children}
        {showClose && <Button remove onClick={onClose} />}
      </header>
    );
  }
}
