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
    document: PropTypes.object,
    portalElement: PropTypes.object,
  }

  static defaultProps = {
    closeOnEsc: true,
    showClose: true,
    closeOnBlur: false,
    // Expose mount point for testing
    document: null,
    portalElement: null,
  }

  static Content = ModalContent
  static Card = ModalCard

  constructor(props) {
    super(props);
    this.portalElement = props.portalElement || null;
  }

  componentDidMount() {
    if (this.props.show) {
      this.openModal(this.props);
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

  componentWillUnmount() {
    if (this.props.show) {
      this.closeModal();
    }
  }

  openModal = (props) => {
    /* istanbul ignore next */
    const d = this.props.document || document;
    const { closeOnEsc, closeOnBlur } = props;
    let { children } = props;
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

    if (!this.portalElement) {
      this.portalElement = d.createElement('div');
      this.portalElement.setAttribute('class', 'modal-container');
      d.body.appendChild(this.portalElement);
    }

    if (closeOnEsc) {
      d.addEventListener('keydown', this.handleKeydown);
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
    /* istanbul ignore next */
    const d = this.props.document || document;
    d.removeEventListener('keydown', this.handleKeydown);
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
