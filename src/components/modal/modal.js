import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ModalContent from './components/content';
import ModalCard from './components/card';

const KEYCODES = {
  ESCAPE: 27,
};

class Modal extends PureComponent {
  portalElement = null;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { closeOnEsc } = this.props;

    const doc = this.getDocument();
    this.portalElement = doc.createElement('div');
    this.portalElement.setAttribute('class', 'modal-container');
    doc.body.appendChild(this.portalElement);
    // eslint-disable-next-line
    if (closeOnEsc) {
      doc.addEventListener('keydown', this.handleKeydown);
    }
    this.forceUpdate();
  }

  componentWillUnmount() {
    const doc = this.getDocument();
    const { closeOnEsc } = this.props;
    if (closeOnEsc && doc) {
      doc.removeEventListener('keydown', this.handleKeydown);
    }
    // IE11 fix
    this.portalElement.parentNode.removeChild(this.portalElement);
  }

  getDocument = () => {
    if (this.props.document) {
      return this.props.document;
    }

    if (typeof document !== 'undefined') {
      return document;
    }

    return null;
  };

  handleKeydown = e => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.show) {
      this.props.onClose();
    }
  };

  render() {
    const { domRef, closeOnBlur, show, className } = this.props;
    if (!this.getDocument() || !this.portalElement || !show) {
      return null;
    }
    let { children } = this.props;
    let isCard;
    try {
      isCard =
        React.Children.only(children)
          .type.toString()
          .indexOf('ModalCard') !== -1;
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
      <div
        ref={domRef}
        className={classnames('modal', className, {
          'is-active': show,
        })}
      >
        <div
          role="presentation"
          className="modal-background"
          onClick={closeOnBlur ? this.props.onClose : undefined}
        />
        {children}
        {showClose && (
          <button
            type="button"
            onClick={this.props.onClose}
            className="modal-close is-large"
            aria-label="close"
          />
        )}
      </div>,
      this.portalElement,
    );
  }
}

Modal.Content = ModalContent;
Modal.Card = ModalCard;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnEsc: PropTypes.bool,
  closeOnBlur: PropTypes.bool,
  showClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
  document: PropTypes.object,
  className: PropTypes.string,
  domRef: PropTypes.object,
};

Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false,
  className: undefined,
  domRef: React.createRef(),
  // Expose mount point for testing
  document: undefined,
};

export default Modal;
