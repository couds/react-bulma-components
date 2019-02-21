import React from 'react';
import { render } from 'react-testing-library';
import { Columns } from '..';

describe('Columns component', () => {
  it('Should have columns classname', () => {
    const { asFragment } = render(
      <Columns>
        <Columns.Column>1</Columns.Column>
        <Columns.Column>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have columns one column half width and 3 other as default', () => {
    const { asFragment } = render(
      <Columns>
        <Columns.Column size="half">1</Columns.Column>
        <Columns.Column>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
        <Columns.Column>4</Columns.Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should render as paragraph', () => {
    const { asFragment } = render(
      <Columns renderAs="p">
        <Columns.Column renderAs="p" size="half">
          1
        </Columns.Column>
        <Columns.Column renderAs="p">2</Columns.Column>
        <Columns.Column renderAs="p">3</Columns.Column>
        <Columns.Column renderAs="p">4</Columns.Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should have columns one column half width, other narrow and 2 other as default', () => {
    const { asFragment } = render(
      <Columns>
        <Columns.Column size="half">1</Columns.Column>
        <Columns.Column narrow>2</Columns.Column>
        <Columns.Column>3</Columns.Column>
        <Columns.Column>4</Columns.Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
