import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalContent from './components/content';
import ModalCard from './components/card';

const KEYCODES = {
  ESCAPE: 27,
};

export default class Modal extends PureComponent {
  static Content = ModalContent

  static Card = ModalCard

  portalElement = null;

  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    showClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    document: PropTypes.object,
    className: PropTypes.string,
  }

  static defaultProps = {
    closeOnEsc: true,
    showClose: true,
    closeOnBlur: false,
    className: '',
    // Expose mount point for testing
    document: null,
  }

  state = {};

  componentDidMount() {
    const { closeOnEsc } = this.props;

    const d = this.getDocument();
    this.portalElement = d.createElement('div');
    this.portalElement.setAttribute('class', 'modal-container');
    d.body.appendChild(this.portalElement);
    if (closeOnEsc) {
      d.addEventListener('keydown', this.handleKeydown);
    }
    // eslint-disable-next-line
    this.setState({ d });
  }

  componentWillUnmount() {
    const { d } = this.state;
    const { closeOnEsc } = this.props;
    if (closeOnEsc) {
      d.removeEventListener('keydown', this.handleKeydown);
    }
    this.portalElement.remove();
  }

  getDocument = () => {
    if (this.props.document) {
      return this.props.document;
    }

    if (typeof document !== 'undefined') {
      return document;
    }

    return null;
  }

  handleKeydown = (e) => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.show) {
      this.props.onClose();
    }
  }

  render() {
    const { closeOnBlur, show, className } = this.props;
    if (!this.getDocument() || !this.portalElement || !show) {
      return null;
    }
    let { children } = this.props;
    let isCard;
    try {
      isCard = React.Children.only(children).type.toString().indexOf('ModalCard') !== -1;
    } catch (e) {
      isCard = false;
    }

    const showClose = !isCard && this.props.showClose;

    if (isCard) {
      children = React.cloneElement(children, {
        onClose: this.props.onClose,
      });
    }

    return ReactDOM.createPortal(
      <div className={classnames('modal', className, {
        'is-active': show,
      })}
      >
        <div role="presentation" className="modal-background" onClick={closeOnBlur ? this.props.onClose : null} />
        {children}
        {
          showClose
          && <button type="button" onClick={this.props.onClose} className="modal-close is-large" aria-label="close" />}
      </div>,
      this.portalElement,
    );
  }
}
