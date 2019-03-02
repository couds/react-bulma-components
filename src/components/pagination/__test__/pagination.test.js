import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Pagination from '..';

describe('Pagination component', () => {
  it('Pagination Should Exist', () => {
    expect(Pagination).toMatchSnapshot();
  });
  it('Should have 3 pages and page 1 active', () => {
    const component = renderer.create(<Pagination total={3} current={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have 5 pages, page 5 active and display pages 3 to 5', () => {
    const component = renderer.create(<Pagination total={5} current={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not display page numbers', () => {
    const component = renderer.create(<Pagination delta={0} total={5} current={5} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not display Previous/Next buttons', () => {
    const component = renderer.create(<Pagination showPrevNext={false} delta={3} total={5} current={2} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe('Next button should be disabled', () => {
    it('when current page equals the total number of pages', () => {
      const component = renderer.create(<Pagination total={3} current={3} />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('when the prop nextDisabled is given', () => {
      const component = renderer.create(<Pagination nextDisabled />);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
  it('previous button should be disabled when the prop prevDisabled is given', () => {
    const component = renderer.create(<Pagination prevDisabled />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not render if total pages equals 1', () => {
    const component = renderer.create(<Pagination total={1} current={1} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should not render if current page is greater than total pages', () => {
    const component = renderer.create(<Pagination total={2} current={3} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should call to onChange event on click on navigation button', () => {
    const onChange = jest.fn();
    const component = mount(<Pagination total={2} current={1} onChange={onChange} />);
    component.find('a.pagination-next').simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
