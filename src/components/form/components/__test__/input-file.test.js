import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { JSDOM } from 'jsdom';

import InputFile from '../input-file';

describe('Dropdown component', () => {
  beforeEach(() => {
    // eslint-disable-next-line
    global.window = new JSDOM('<body><div id="app-root"></div></body>').window;
  });
  it('Should Exist', () => {
    expect(InputFile).toMatchSnapshot();
  });
  it('Should render file input tree', () => {
    const component = renderer.create(<InputFile onChange={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call onChange with file data', () => {
    const onChange = jest.fn();
    const component = shallow(
      <InputFile
        className="input-file"
        value=""
        style={{ width: 400 }}
        onChange={onChange}
      />,
    );
    component.find('.file-input').simulate('change', {
      target: {
        files: [
          {
            name: 'dummyValue.something',
          },
        ],
      },
    });
    expect(onChange).toBeCalled();
  });

  it('should call onChange without file data', () => {
    const onChange = jest.fn();
    const component = shallow(
      <InputFile
        className="input-file"
        value=""
        style={{ width: 400 }}
        onChange={onChange}
      />,
    );
    component.find('.file-input').simulate('change', {
      target: {
        files: [],
      },
    });
    expect(component.find('.file-name').length).toBe(0);
    expect(onChange).toBeCalled();
  });

  it('should set filename text', () => {
    const component = renderer.create(<InputFile filename="my-file.js" onChange={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  })

  it('should set value of input file', () => {
    const component = renderer.create(<InputFile value={{ custom: 'value' }} onChange={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  })

  it('should pass file attributes', () => {
    const inputProps = {
      accept: 'image/*',
      capture: 'source',
      multiple: true,
    };
    const component = renderer.create(
      <InputFile inputProps={inputProps} onChange={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
