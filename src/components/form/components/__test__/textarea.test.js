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
  it('Should support hover state', () => {
    const component = renderer.create(<Textarea status="hover" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should support focus state', () => {
    const component = renderer.create(<Textarea status="focus" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have a fixed size', () => {
    const component = renderer.create(<Textarea fixedSize />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
