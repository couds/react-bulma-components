import React from 'react';
import renderer from 'react-test-renderer';
import Card from '..';

describe('Card component', () => {
  it('Should have card classname', () => {
    const component = renderer.create(<Card>Card Content</Card>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-image classname', () => {
    const component = renderer.create(
      <Card.Image
        size="4by3"
        src="http://bulma.io/images/placeholders/1280x960.png"
      />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have card-content classname', () => {
    const component = renderer.create(<Card.Content>Content</Card.Content>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("Should have card-header's classname", () => {
    const component = renderer.create(
      <Card>
        <Card.Header>
          <Card.Header.Title>Title</Card.Header.Title>
          <Card.Header.Icon>
            <i className="icon" />
          </Card.Header.Icon>
        </Card.Header>
      </Card>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("Should have card-footer's classname", () => {
    const component = renderer.create(
      <Card>
        <Card.Footer>
          <Card.Footer.Item>Yes</Card.Footer.Item>
          <Card.Footer.Item>No</Card.Footer.Item>
        </Card.Footer>
      </Card>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
