import React from 'react';
import { render } from 'react-testing-library';
import { Section } from '..';

describe('Section component', () => {
  it('should render', () => {
    const { asFragment } = render(<Section />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Section className="other-class this-is-a-test">
        <p>Default</p>
      </Section>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(
      <Section style={{ height: 250 }}>
        <p>Default</p>
      </Section>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be Large', () => {
    const { asFragment } = render(
      <Section size="large">
        <p>Default</p>
      </Section>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render as nav element', () => {
    const { asFragment } = render(
      <Section renderAs="nav">
        <p>Default</p>
      </Section>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
