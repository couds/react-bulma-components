import React from 'react';
import { render } from 'react-testing-library';
import { Card } from '..';

describe('Card component', () => {
  it.each([[Card], [Card.Content], [Card.Footer], [Card.Header]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render card-image', () => {
    const { asFragment } = render(<Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render card-header', () => {
    const { asFragment } = render(
      <Card>
        <Card.Header>
          <Card.Header.Title>Title</Card.Header.Title>
          <Card.Header.Icon>
            <i className="icon" />
          </Card.Header.Icon>
        </Card.Header>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render card-footer', () => {
    const { asFragment } = render(
      <Card>
        <Card.Footer>
          <Card.Footer.Item>Yes</Card.Footer.Item>
          <Card.Footer.Item>No</Card.Footer.Item>
        </Card.Footer>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
