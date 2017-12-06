import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '..';

const Link = ({
  to,
  children,
}) => (
  <a href={to}>{children}</a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

describe('Button component', () => {
  it('Should be a default Button', () => {
    const component = renderer.create(<Button href="http://google.com" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Primary Button', () => {
    const component = renderer.create(<Button color="primary" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a Large Primary Button', () => {
    const component = renderer.create(<Button color="primary" size="large" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a static Button', () => {
    const component = renderer.create(<Button isStatic color="primary" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a html button', () => {
    const component = renderer.create(<Button renderAs="button" color="danger" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a React element link with custom href', () => {
    const component = renderer.create(
      <Button renderAs={Link} href="http://google.com" hrefAttr="to" color="danger" >
        TEST
      </Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should throw a console.error if no hrefAttr is defined when renderAs different as A and href attr is defined', () => {
    console.error = jest.genMockFn();
    renderer.create(
      <Button renderAs={Link} href="http://google.com" color="danger" >
        TEST
      </Button>);
    expect(console.error).toHaveBeenCalled();
    console.error.mockRestore();
  });
  it('Should render be disabled', () => {
    const component = renderer.create(<Button disabled />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a submit form button', () => {
    const component = renderer.create(<Button submit />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be a reset form button', () => {
    const component = renderer.create(<Button reset />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have a Click listener', () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick} />);
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
