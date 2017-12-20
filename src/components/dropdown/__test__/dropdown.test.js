import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { JSDOM } from 'jsdom';
import Dropdown from '..';

describe('Dropdown component', () => {
  let window;
  beforeEach(() => {
    // eslint-disable-next-line
    window = (new JSDOM('<body><div id="app-root"></div></body>')).window;
  });
  it('Should Exist', () => {
    expect(Dropdown).toMatchSnapshot();
  });
  it('Should have dropdown classname', () => {
    const component = renderer.create(
      <Dropdown value="value" onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should add listener do document on mount', () => {
    const app = window.document.querySelector('#app-root');
    window.document.addEventListener = jest.genMockFn();
    window.document.removeEventListener = jest.genMockFn();
    const component = mount(
      <Dropdown value="value" onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>,
      {
        attachTo: app,
      },
    );
    expect(window.document.addEventListener).toHaveBeenCalled();
    component.unmount();
    // TODO: Research why this function is not invoked
    // expect(window.document.removeEventListener).toHaveBeenCalled();
    window.document.addEventListener.mockRestore();
    window.document.removeEventListener.mockRestore();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(
      <Dropdown value="value" className="other-class" onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const component = renderer.create(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should print error if value is passed but no onChange Handler', () => {
    // eslint-disable-next-line no-console
    console.error = jest.genMockFn();
    renderer.create(
      <Dropdown value="value" style={{ width: 400 }}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    expect(global.console.error).toBeCalled();
    // eslint-disable-next-line no-console
    console.error.mockRestore();
  });
  it('Should have divider', () => {
    const component = renderer.create(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="other">
          Other
        </Dropdown.Item>
      </Dropdown>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should open the Dropdown', () => {
    const component = shallow(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="other">
          Other
        </Dropdown.Item>
      </Dropdown>);
    expect(component.state('open')).toBe(false);
    component.find('.dropdown-trigger').simulate('click');
    expect(component.state('open')).toBe(true);
  });
  it('Should open the Dropdown and prevent default event (not to navigate if a link is on the dropdown trigger)', () => {
    const preventDefault = jest.fn();
    const component = shallow(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="other">
          Other
        </Dropdown.Item>
      </Dropdown>);
    expect(component.state('open')).toBe(false);
    component.find('.dropdown-trigger').simulate('click', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
    expect(component.state('open')).toBe(true);
  });
  it('Should change the value', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Dropdown value="" hoverable style={{ width: 400 }} onChange={onChange}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    component.find('.dropdown-trigger').simulate('click');
    component.find(Dropdown.Item).simulate('click');
    expect(onChange).toHaveBeenCalledWith('value');
    expect(component.state('open')).toBe(false);
  });
  it('Should close on select', () => {
    const component = shallow(
      <Dropdown>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    component.find('.dropdown-trigger').simulate('click');
    component.find(Dropdown.Item).simulate('click');
    expect(component.state('open')).toBe(false);
  });
  it('Should close the dropdown', () => {
    const onChange = jest.fn();
    const component = shallow(
      <Dropdown value="" style={{ width: 400 }} onChange={onChange}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    component.find('.dropdown-trigger').simulate('click');
    component.find(Dropdown.Item).simulate('click', { path: [] });
    expect(component.state('open')).toBe(false);
  });
  it('Should change display error message if props change has value but no onChange Handler', () => {
    // eslint-disable-next-line no-console
    console.error = jest.genMockFn();
    const component = shallow(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">
          Item
        </Dropdown.Item>
      </Dropdown>);
    expect(global.console.error).not.toBeCalled();
    component.setProps({ value: 'other', onChange: () => {} });
    expect(global.console.error).not.toBeCalled();
    component.setProps({ value: 'other', onChange: null });
    expect(global.console.error).toBeCalled();
    // eslint-disable-next-line no-console
    console.error.mockRestore();
  });
});
