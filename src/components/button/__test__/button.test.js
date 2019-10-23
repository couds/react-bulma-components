import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Button from '..';

const Link = ({ to, children }) => <a href={to}>{children}</a>;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

describe('Button component', () => {
  it('Should exist', () => {
    expect(Button).toMatchSnapshot();
  });
  it('Should expose Button Group', () => {
    expect(Button.Group).toMatchSnapshot();
  });
  it('Should be a default Button', () => {
    const component = renderer.create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should be an anchor button', () => {
    const component = renderer.create(
      <Button
        renderAs="a"
        href="https://github.com/couds/react-bulma-components"
      />,
    );
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
    const component = renderer.create(
      <Button renderAs="button" color="danger" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as a React element link with to prop', () => {
    const component = renderer.create(
      <Button renderAs={Link} to="http://google.com" color="danger">
        TEST
      </Button>,
    );
    expect(component.toJSON()).toMatchSnapshot();
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
  it('Should have no dispatch click handler if disabled', () => {
    const onClick = jest.fn();
    const component = shallow(<Button disabled onClick={onClick} />);
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('Should have a call default onClick is no listener is set', () => {
    const spy = jest.spyOn(Button.defaultProps, 'onClick');
    const component = shallow(<Button />);
    component.simulate('click');
    component.simulate('click');
    expect(spy).toHaveBeenCalledTimes(2);
    Button.defaultProps.onClick.mockRestore();
  });
  it('Should forward ref', () => {
    const testRef = React.createRef();
    mount(<Button ref={testRef} />);
    expect(testRef.current).not.toBeNull();
  });
  describe('Button Group component', () => {
    it('Should be a default list of buttons', () => {
      const component = renderer.create(
        <Button.Group>
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>,
      );
      expect(component).toMatchSnapshot();
    });
    it('Should concat class names in props with Bulma class name', () => {
      const component = renderer.create(
        <Button.Group className="super-class-1 dope-class-2">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should group buttons together', () => {
      const component = renderer.create(
        <Button.Group hasAddons>
          <Button>test 1</Button>
          <Button>test 2</Button>
        </Button.Group>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should be centered', () => {
      const component = renderer.create(
        <Button.Group position="centered">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
    it('Should align to the right', () => {
      const component = renderer.create(
        <Button.Group position="right">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </Button.Group>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
