import React from 'react';
import { render } from 'react-testing-library';
import { Card } from '..';

describe('Card component', () => {
  it('should export Content, Footer, Header and Image as static properties', () => {
    expect(Card.Content).toBeDefined();
    expect(Card.Footer).toBeDefined();
    expect(Card.Header).toBeDefined();
    expect(Card.Image).toBeDefined();
  });
  it('should have card classname', () => {
    const { asFragment } = render(<Card>Card Content</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have card-image classname', () => {
    const { asFragment } = render(<Card.Image size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have card-content classname', () => {
    const { asFragment } = render(<Card.Content>Content</Card.Content>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("Should have card-header's classname", () => {
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
  it("Should have card-footer's classname", () => {
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
