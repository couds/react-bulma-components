import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { ModalCard } from './components/card';
import { ModalContent } from './components/content';

const KEYCODES = {
  ESCAPE: 27
};

export class ModalEl extends PureComponent {
  portalElement = null;

  static propTypes = {
    innerRef: PropTypes.node,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    showClose: PropTypes.bool,
    children: PropTypes.node.isRequired,
    document: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    innerRef: undefined,
    closeOnEsc: true,
    showClose: true,
    closeOnBlur: false,
    className: '',
    // Expose mount point for testing
    document: null
  };

  state = {};

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
  };

  handleKeydown = e => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.show) {
      this.props.onClose();
    }
  };

  render() {
    const { innerRef, closeOnBlur, show, className } = this.props;
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
        onClose: this.props.onClose
      });
    }

    return ReactDOM.createPortal(
      <div
        ref={innerRef}
        className={cn('modal', className, {
          'is-active': show
        })}
      >
        <div role="presentation" className="modal-background" onClick={closeOnBlur ? this.props.onClose : null} />
        {children}
        {showClose && (
          <button type="button" onClick={this.props.onClose} className="modal-close is-large" aria-label="close" />
        )}
      </div>,
      this.portalElement
    );
  }
}

export const Modal = React.forwardRef((props, ref) => <ModalEl innerRef={ref} {...props} />);

Modal.Content = ModalContent;
Modal.Card = ModalCard;
