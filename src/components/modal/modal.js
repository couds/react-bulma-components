import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalContent from './components/content';
import ModalCard from './components/card';

const KEYCODES = {
  ESCAPE: 27,
};

export default class Modal extends React.Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    showClose: PropTypes.bool,
    children: PropTypes.element.isRequired,
  }

  static defaultProps = {
    closeOnEsc: true,
    children: null,
    className: '',
    style: {},
    showClose: true,
    closeOnBlur: false,
  }

  static Content = ModalContent
  static Card = ModalCard

  constructor(props) {
    super(props);
    if (props.show) {
      this.openModal(props);
    }
  }

  componentWillReceiveProps(props) {
    if (props.show !== this.props.show) {
      if (props.show) {
        this.openModal({ ...this.props, ...props });
      } else {
        this.closeModal();
      }
    }
  }

  portalElement = null

  openModal = (props) => {
    const { closeOnEsc, closeOnBlur } = props;
    let { children } = props;
    let isContent;
    try {
      isContent = React.Children.only(children).type.toString().indexOf('ModalContent') !== -1;
    } catch (e) {
      isContent = true;
    }

    const showClose = isContent && this.props.showClose;

    if (!isContent) {
      children = React.cloneElement(children, {
        onClose: this.props.onClose,
      });
    }

    if (!this.portalElement) {
      this.portalElement = document.createElement('div');
      document.body.appendChild(this.portalElement);
    }

    if (closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }

    ReactDOM.render(
      <div className="modal is-active">
        <div role="presentation" className="modal-background" onClick={closeOnBlur ? this.props.onClose : null} />
        {children}
        {
          showClose &&
          <button onClick={this.props.onClose} className="modal-close is-large" aria-label="close" />}
      </div>,
      this.portalElement,
    );
  }

  closeModal = () => {
    document.removeEventListener('keydown', this.handleKeydown);
    ReactDOM.unmountComponentAtNode(this.portalElement);
    this.portalElement.remove();
    this.portalElement = null;
  }

  handleKeydown = (e) => {
    if (e.keyCode === KEYCODES.ESCAPE) {
      this.props.onClose();
    }
  }

  render() { return null; }
}
