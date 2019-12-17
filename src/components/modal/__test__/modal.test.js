import React from 'react';
import { mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import { renderToString } from 'react-dom/server';
import Modal from '..';

describe('Modal component', () => {
  let window;
  let component;
  beforeEach(() => {
    // eslint-disable-next-line
    window = new JSDOM().window;
    global.window = window;
    global.document = window.document;
  });
  afterEach(() => {
    if (component && component.unmount) {
      component.unmount();
    }
    window = undefined;
    global.window = undefined;
    global.document = undefined;
  });
  it('Should Exist', () => {
    expect(Modal).toMatchSnapshot();
  });
  it("Should expose Content and Card's types", () => {
    expect(Modal.Content).toMatchSnapshot();
    expect(Modal.Card).toMatchSnapshot();
    expect(Modal.Card.Title).toMatchSnapshot();
    expect(Modal.Card.Head).toMatchSnapshot();
    expect(Modal.Card.Body).toMatchSnapshot();
    expect(Modal.Card.Foot).toMatchSnapshot();
  });
  it('Should render modal-card-head', () => {
    const onClose = jest.fn();
    component = mount(
      <Modal.Card onClose={onClose}>
        <Modal.Card.Head onClose={onClose}>
          <Modal.Card.Title>Modal Title</Modal.Card.Title>
        </Modal.Card.Head>
      </Modal.Card>,
    );
    component
      .find('.delete')
      .first()
      .simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
  it('Should open the modal', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal document={window.document} show={false} onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>,
    );
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
    component.setProps({ show: true });
    expect(
      window.document.querySelector('div.modal.is-active'),
    ).toMatchSnapshot();
  });
  it('Should close the modal', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal document={window.document} show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head onClose={onClose}>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('.delete').click();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should close the modal on ESC key press', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal document={window.document} show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    const event = new window.KeyboardEvent('keydown', { keyCode: 27 });
    window.document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should not close the modal on ESC key press', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal
        closeOnEsc={false}
        document={window.document}
        show
        onClose={onClose}
      >
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
        </Modal.Card>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    const event = new window.KeyboardEvent('keydown', { keyCode: 27 });
    window.document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    expect(modal).not.toBe(null);
  });
  it('Should not close the modal on other than ESC key press', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal closeOnEsc document={window.document} show onClose={onClose}>
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Modal Title</Modal.Card.Title>
          </Modal.Card.Head>
          <Modal.Card.Body>Body</Modal.Card.Body>
          <Modal.Card.Foot>Footer</Modal.Card.Foot>
        </Modal.Card>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    const event = new window.KeyboardEvent('keydown', { keyCode: 23 });
    window.document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    expect(modal).not.toBe(null);
  });
  it('Should render any child type', () => {
    // eslint-disable-next-line no-console
    const onClose = jest.fn();
    component = mount(
      <Modal document={window.document} show onClose={onClose}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </Modal>,
    );
    expect(
      window.document.querySelector('div.modal.is-active'),
    ).toMatchSnapshot();
  });
  it('Should no try to reopen if other prop change', () => {
    const onClose = jest.fn();
    component = mount(
      <Modal document={window.document} show onClose={onClose}>
        <Modal.Content>Content</Modal.Content>
      </Modal>,
    );
    component.setProps({ randomProp: 'test' });
    expect(
      window.document.querySelector('div.modal.is-active'),
    ).toMatchSnapshot();
  });
  it('Should close the modal if clicked on background', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal document={window.document} show onClose={onClose} closeOnBlur>
        <Modal.Content>Content</Modal.Content>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('div.modal-background').click();
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(window.document.querySelector('div.modal.is-active')).toBeNull();
  });
  it('Should not close the modal if clicked on background', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal
        closeOnBlur={false}
        document={window.document}
        show
        onClose={onClose}
      >
        <Modal.Content>Content</Modal.Content>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
    modal.querySelector('div.modal-background').click();
    expect(onClose).not.toHaveBeenCalled();
    expect(
      window.document.querySelector('div.modal.is-active'),
    ).toMatchSnapshot();
  });
  it('Should not show close button', () => {
    const onClose = jest.fn(() => {
      component.setProps({ show: false });
    });
    component = mount(
      <Modal
        showClose={false}
        document={window.document}
        show
        onClose={onClose}
      >
        <Modal.Content>Content</Modal.Content>
      </Modal>,
    );
    const modal = window.document.querySelector('div.modal.is-active');
    expect(modal).toMatchSnapshot();
  });

  it('Should render empty because no document on scope', () => {
    component = renderToString(
      <Modal show onClose={() => {}}>
        <Modal.Content>Content</Modal.Content>
      </Modal>,
    );
    expect(component).toMatchSnapshot();
  });
});
