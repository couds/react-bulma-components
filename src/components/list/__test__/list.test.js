import React from 'react';
import renderer from 'react-test-renderer';
import List from '..';

describe('List component', () => {
  it('Should Exist', () => {
    expect(List).toMatchSnapshot();
  });

  it('Should Render a list', () => {
    const component = renderer.create(
      <List>
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item active>3</List.Item>
        <List.Item>4</List.Item>
      </List>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
