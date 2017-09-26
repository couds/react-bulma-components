import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '..';

describe('Modal component', () => {
  it('Should Exist', () => {
    expect(Modal).toMatchSnapshot();
  });
  it('Should have modal classname', () => {
    const component = renderer.create(
      <Modal>Modal content</Modal>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
