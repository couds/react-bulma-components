import React from 'react';
import { render } from 'react-testing-library';
import { Media } from '..';

describe('Media component', () => {
  it.each([[Media], [Media.Content], [Media.Item]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Media style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have media classname', () => {
    const { asFragment } = render(
      <Media>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should hbe a Media Item', () => {
    const { asFragment } = render(
      <Media.Item renderAs="figure" position="left">
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should hbe a Media Item Centered', () => {
    const { asFragment } = render(
      <Media.Item renderAs="figure" position="center">
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be a Media Content', () => {
    const { asFragment } = render(<Media.Content>Content</Media.Content>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Media className="other-class this-is-a-test">Content</Media>);
    expect(asFragment()).toMatchSnapshot();
  });
});
