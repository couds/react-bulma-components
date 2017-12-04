import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Input from '../input';

describe('Input component', () => {
  it('Should exist', () => {
    expect(Input).toMatchSnapshot();
  });
  it('Should have input classname', () => {
    const component = renderer.create(<Input />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(<Input className="other-class this-is-a-test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(<Input style={{ height: 250 }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be type email and a with success colors', () => {
    const component = renderer.create(<Input color="success" type="email" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large and readOnly', () => {
    const component = renderer.create(<Input readOnly size="large" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled with placeholder and value', () => {
    const component = renderer.create(<Input value="TEST" disabled placeholder="hello tests" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use default event methods', () => {
    const onClick = jest.spyOn(Input.defaultProps, 'onClick');
    const onChange = jest.spyOn(Input.defaultProps, 'onChange');
    const onFocus = jest.spyOn(Input.defaultProps, 'onFocus');
    const onBlur = jest.spyOn(Input.defaultProps, 'onBlur');
    const component = shallow(<Input value="TEST" disabled placeholder="hello tests" />);

    component.simulate('change');
    component.simulate('change');
    component.simulate('focus');
    component.simulate('blur');
    component.simulate('click');
    component.simulate('focus');

    expect(onFocus).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
