import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Message from '..';

describe('Message component', () => {
  it('Should Exist', () => {
    expect(Message).toMatchSnapshot();
  });
  it('Should have message classnames', () => {
    const component = renderer.create(
      <Message>
        <Message.Header>Lorem Ipsum</Message.Header>
        <Message.Body>Lorem Ipsum</Message.Body>
      </Message>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    const component = renderer.create(
      <Message className="other-class">
        <Message.Header>Lorem Ipsum</Message.Header>
        <Message.Body>Lorem Ipsum</Message.Body>
      </Message>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    const component = renderer.create(
      <Message renderAs="section">This should be a section</Message>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    const component = renderer.create(
      <Message renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Message>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = props => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );
    Custom.propTypes = { children: PropTypes.node.isRequired };

    const component = renderer.create(
      <Message renderAs={Custom}>This should be a p element</Message>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
