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
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    closeOnEsc: PropTypes.bool,
    closeOnBlur: PropTypes.bool,
    showClose: PropTypes.bool,
    children: PropTypes.element.isRequired,
    document: PropTypes.object,
  }

  static defaultProps = {
    closeOnEsc: true,
    showClose: true,
    closeOnBlur: false,
    // Expose mount point for testing
    document: null,
  }

  static Content = ModalContent
  static Card = ModalCard

  componentWillMount() {
    const d = this.getDocument();
    if (!this.portalElement && d) {
      this.portalElement = d.createElement('div');
      this.portalElement.setAttribute('class', 'modal-container');
      d.body.appendChild(this.portalElement);
      if (this.props.closeOnEsc) {
        d.addEventListener('keydown', this.handleKeydown);
      }
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      const d = this.props.document || document;
      d.addEventListener('keydown', this.handleKeydown);
    }
  }

  /* istanbul ignore next */
  getDocument = () => this.props.document || document

  portalElement = null;

  handleKeydown = (e) => {
    if (e.keyCode === KEYCODES.ESCAPE && this.props.show) {
      this.props.onClose();
    }
  }

  render() {
    if (!this.portalElement) {
      return null;
    }
    const { closeOnBlur, show } = this.props;
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
      <div className={classnames('modal', {
        'is-active': show,
      })}
      >
        <div role="presentation" className="modal-background" onClick={closeOnBlur ? this.props.onClose : null} />
        {children}
        {
          showClose &&
          <button onClick={this.props.onClose} className="modal-close is-large" aria-label="close" />}
      </div>,
      this.portalElement,
    );
  }
}
