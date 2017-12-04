import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalCardHead from './head';
import ModalCardBody from './body';
import ModalCardFoot from './foot';
import ModalCardTitle from './title';

export default class ModalCard extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    onClose: null,
  }

  static Head = ModalCardHead
  static Body = ModalCardBody
  static Foot = ModalCardFoot
  static Title = ModalCardTitle

  render() {
    const {
      className,
      style,
      ...props
    } = this.props;

    const children = React.Children.map(props.children, (child) => {
      if (child.type.toString().indexOf('ModalCardHead') !== -1) {
        return React.cloneElement(child, {
          onClose: props.onClose,
        });
      }
      return child;
    });
    return (
      <div
        className={classnames('modal-card', className)}
        style={style}
      >
        {children}
      </div>
    );
  }
}
