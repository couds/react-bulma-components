import { JSDOM } from 'jsdom';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Dropdown } from '../dropdown';

describe('Dropdown component', () => {
  beforeEach(() => {
    global.window = new JSDOM('<body><div id="app-root"></div></body>').window;
  });
  it('Should have dropdown classname', () => {
    const { asFragment } = render(
      <Dropdown value="value" onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should add listener do document on mount', () => {
    global.window.document.addEventListener = jest.fn();
    render(
      <Dropdown value="value" onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(window.document.addEventListener).toHaveBeenCalled();
  });
  it('Should concat Bulma class with classes in props', () => {
    const { asFragment } = render(
      <Dropdown value="value" className="other-class" onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const { asFragment } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have divider', () => {
    const { asFragment } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="other">Other</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should be right-aligned when using "right" prop', () => {
    const { asFragment } = render(
      <Dropdown right>
        <Dropdown.Item value="value">Item</Dropdown.Item>
        <Dropdown.Item value="other">Other</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should appear above the dropdown button', () => {
    const { asFragment } = render(
      <Dropdown up>
        <Dropdown.Item value="value">Item</Dropdown.Item>
        <Dropdown.Item value="other">Other</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should open the Dropdown', () => {
    const { getByTestId } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <Dropdown.Item value="value">Item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="other">Other</Dropdown.Item>
      </Dropdown>
    );
    expect(getByTestId('dropdown-container')).not.toHaveClass('is-active');
    fireEvent.click(getByTestId('dropdown-trigger'));
    expect(getByTestId('dropdown-container')).toHaveClass('is-active');
  });
  it('Should select the new value', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown hoverable value="" style={{ width: 400 }} onChange={onChange}>
        <Dropdown.Item data-testid="foo" value="value">
          Foo
        </Dropdown.Item>
      </Dropdown>
    );
    fireEvent.mouseOver(getByTestId('dropdown-trigger'));
    fireEvent.click(getByTestId('foo'));
    expect(onChange).toHaveBeenCalledWith('value');
  });
  it('Should select the new value and close the dropdown', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown value="" style={{ width: 400 }} onChange={onChange}>
        <Dropdown.Item data-testid="foo" value="value">
          Foo
        </Dropdown.Item>
      </Dropdown>
    );
    fireEvent.click(getByTestId('dropdown-trigger'));
    fireEvent.click(getByTestId('foo'));
    expect(onChange).toHaveBeenCalledWith('value');
    expect(getByTestId('dropdown-container')).not.toHaveClass('is-active');
  });
  it('Should show custom label passed to the label prop', () => {
    const { asFragment } = render(
      <Dropdown label="test label">
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should show the label of the first dropdown item when no custom label is passed', () => {
    const { asFragment } = render(
      <Dropdown>
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should show custom label when active valued is undefined/empty', () => {
    const { getByTestId } = render(
      <Dropdown label="test label" value="">
        <Dropdown.Item value="value">Item</Dropdown.Item>
      </Dropdown>
    );
    expect(getByTestId('dropdown-trigger')).toHaveTextContent('test label');
  });
  it('Should show the label of the dropdown item when value of it is the active value', () => {
    const { getByTestId } = render(
      <Dropdown label="test label" value="value">
        <Dropdown.Item value="value">Bar</Dropdown.Item>
      </Dropdown>
    );
    expect(getByTestId('dropdown-trigger')).toHaveTextContent('Bar');
  });
});
