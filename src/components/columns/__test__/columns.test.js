import React from 'react';
import renderer from 'react-test-renderer';
import Columns from '..';

describe('Columns component', () => {
  it('Should have columns classname', () => {
    const component = renderer.create(
      <Columns>
        <Columns.Column>1</Columns.Column>
        <Columns.Column>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
      </Columns>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have columns one column half width and 3 other as default', () => {
    const component = renderer.create(
      <Columns>
        <Columns.Column size="half">1</Columns.Column>
        <Columns.Column>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
        <Columns.Column>4</Columns.Column>
      </Columns>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as paragraph', () => {
    const component = renderer.create(
      <Columns renderAs="p">
        <Columns.Column renderAs="p" size="half">
          1
        </Columns.Column>
        <Columns.Column renderAs="p">2</Columns.Column>
        <Columns.Column renderAs="p">3</Columns.Column>
        <Columns.Column renderAs="p">4</Columns.Column>
      </Columns>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have columns one column half width, other narrow and 2 other as default', () => {
    const component = renderer.create(
      <Columns>
        <Columns.Column size="half">1</Columns.Column>
        <Columns.Column narrow>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
        <Columns.Column>4</Columns.Column>
      </Columns>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
