import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from '../textarea';

describe('Textarea component', () => {
  it('Should exist', () => {
    expect(Textarea).toMatchSnapshot();
  });
  it('Should have textarea classname', () => {
    const component = renderer.create(<Textarea />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat classname in props with Bulma classname', () => {
    const component = renderer.create(
      <Textarea className="other-class this-is-a-test" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should use inline styles', () => {
    const component = renderer.create(<Textarea style={{ height: 250 }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be large with 10 rows and readOnly', () => {
    const component = renderer.create(
      <Textarea rows={10} readOnly size="large" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be disabled with placeholder and value', () => {
    const component = renderer.create(
      <Textarea value="TEST" disabled placeholder="hello tests" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
