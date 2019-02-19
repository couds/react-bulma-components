import { mount } from 'enzyme';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { fireEvent, render } from 'react-testing-library';
import { Modal } from '..';

describe('Modal component', () => {
  it('Should render modal-card-head', () => {
    const onClose = jest.fn();
    const { container, unmount } = render(
      <Modal.Card onClose={onClose}>
        <Modal.Card.Head onClose={onClose}>
          <Modal.Card.Title>Modal Title</Modal.Card.Title>
        </Modal.Card.Head>
      </Modal.Card>
    );
    fireEvent.click(container.querySelector('.delete'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });
  it('Should open the modal', () => {
    const onClose = jest.fn();
    const getComponent = show => (
      <Modal show={show} onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>
    );
    const { rerender, unmount } = render(getComponent(false));
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
    rerender(getComponent(true));
    expect(window.document.querySelector('div.modal.is-active')).toMatchSnapshot();
    unmount();
  });
  it('Should close the modal', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head onClose={onClose}>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-card-close-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });
  it('Should call close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head onClose={onClose}>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 27 });
    document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });
  it('Should not close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal closeOnEsc={false} show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>
    );

    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 27 });
    document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });
  it('Should not close the modal on other than ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>
    );

    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 23 });
    document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });
  it('Should render any child type', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
  it('Should close the modal if clicked on background', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose} closeOnBlur>
        <Modal.Content>Content</Modal.Content>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-background'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });
  it('Should not close the modal if clicked on background', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose} closeOnBlur={false}>
        <Modal.Content>Content</Modal.Content>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-background'));
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });
  it('Should not show close button', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal showClose={false} show onClose={onClose}>
        <Modal.Content>Content</Modal.Content>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('Should render empty because no document on scope', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <Modal.Content>Content</Modal.Content>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
