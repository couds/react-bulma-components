import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ModalCardFoot extends PureComponent {
  static displayName = 'Modal.Card.Foot'
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
      <footer
        {...props}
        className={classnames('modal-card-foot', className)}
      >
        {children}
      </footer>
    );
  }
}
