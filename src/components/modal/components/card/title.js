import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ModalCardTitle extends React.PureComponent {
  static displayName = 'Modal.Card.Title'
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
      <p
        {...props}
        className={classnames('modal-card-title', className)}
      >
        {children}
      </p>
    );
  }
}

