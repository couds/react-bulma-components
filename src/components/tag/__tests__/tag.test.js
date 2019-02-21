import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Tag } from '..';
import CONSTANTS from '../../../constants';

describe('Tag component', () => {
  it.each([[Tag], [Tag.Group]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tag className="other-class this-is-a-test">Tag name</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const { asFragment } = render(<Tag style={{ width: 250 }}>Tag name</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be Large', () => {
    const { asFragment } = render(<Tag size="large">Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have info color', () => {
    const { asFragment } = render(<Tag color="info">Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have close button', () => {
    const { asFragment } = render(<Tag close>Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have remove button', () => {
    const { asFragment } = render(<Tag remove>Very large text with some extras</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should trim content', () => {
    const { asFragment } = render(<Tag ellipsis>Very large text with some extras</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should trigger onClick event on close button', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Tag close onClick={onClick}>
        close
      </Tag>
    );
    fireEvent.click(getByTestId('tag-delete'));
    expect(onClick).toHaveBeenCalled();
  });
  it('should trigger onClick event on remove button', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Tag remove onClick={onClick} />);
    fireEvent.click(getByTestId('tag'));
    expect(onClick).toHaveBeenCalled();
  });
  it('should be group tags', () => {
    const { asFragment } = render(
      <Tag.Group gapless>
        <Tag>Tag 1</Tag>
        <Tag remove />
      </Tag.Group>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const { asFragment } = render(
        <Tag color={color}>
          tag
          {color}
        </Tag>
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );
});
