import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tag } from '..';
import CONSTANTS from '../../../constants';

describe('Tag component', () => {
  it('should exist', () => {
    expect(Tag).toMatchSnapshot();
  });
  it('should expose Tag Group', () => {
    expect(Tag.Group).toMatchSnapshot();
  });
  it('should have tag classname', () => {
    const component = renderer.create(<Tag>Tag name</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should concat classname in props with classname', () => {
    const component = renderer.create(<Tag className="other-class this-is-a-test">Tag name</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should use inline styles', () => {
    const component = renderer.create(<Tag style={{ width: 250 }}>Tag name</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should be Large', () => {
    const component = renderer.create(<Tag size="large">Tag Large</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should have info color', () => {
    const component = renderer.create(<Tag color="info">Tag Large</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should have close button', () => {
    const component = renderer.create(<Tag close>Tag Large</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should have remove button', () => {
    const component = renderer.create(<Tag remove>Very large text with some extras</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should trim content', () => {
    const component = renderer.create(<Tag ellipsis>Very large text with some extras</Tag>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should trigger onClick event on close button', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Tag close onClick={onClick}>
        close
      </Tag>
    );
    component.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should trigger onClick event on remove button', () => {
    const onClick = jest.fn();
    const component = shallow(<Tag remove onClick={onClick} />);
    component.find('.tag').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should be group tags', () => {
    const component = renderer.create(
      <Tag.Group gapless>
        <Tag>Tag 1</Tag>
        <Tag remove />
      </Tag.Group>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  Object.values(CONSTANTS.COLORS).map(color =>
    it(`Should use use color ${color}`, () => {
      const component = renderer.create(
        <Tag color={color}>
          tag
          {color}
        </Tag>
      );
      expect(component.toJSON()).toMatchSnapshot();
    })
  );
});
