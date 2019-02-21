import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-testing-library';
import { Message } from '..';

describe('Message component', () => {
  it.each([[Message], [Message.Header], [Message.Body]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render with all', () => {
    const { asFragment } = render(
      <Message>
        <Message.Header>Lorem Ipsum</Message.Header>
        <Message.Body>Lorem Ipsum</Message.Body>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Message className="other-class">
        <Message.Header>Lorem Ipsum</Message.Header>
        <Message.Body>Lorem Ipsum</Message.Body>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as an html section', () => {
    const { asFragment } = render(<Message renderAs="section">This should be a section</Message>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Message renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should accept a react Element as renderAs prop', () => {
    const Custom = props => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );
    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(<Message renderAs={Custom}>This should be a p element</Message>);
    expect(asFragment()).toMatchSnapshot();
  });
});
