import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Pagination } from '..';

describe('Pagination component', () => {
  it('should have 3 pages and page 1 active', () => {
    const { asFragment } = render(<Pagination total={3} current={1} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have 5 pages, page 5 active and display pages 3 to 5', () => {
    const { asFragment } = render(<Pagination total={5} current={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not display page numbers', () => {
    const { asFragment } = render(<Pagination showPrevNext delta={0} total={5} current={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not display Previous/Next buttons', () => {
    const { asFragment } = render(<Pagination delta={3} total={5} current={2} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Next button should be disabled', () => {
    const { asFragment } = render(<Pagination total={3} current={3} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not render if total pages equals 1', () => {
    const { asFragment } = render(<Pagination total={1} current={1} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not render if current page is greater than total pages', () => {
    const { asFragment } = render(<Pagination total={2} current={3} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should call to onChange event on click on navigation button', () => {
    const onChange = jest.fn();
    const { container } = render(<Pagination total={5} current={0} showPrevNext onChange={onChange} />);
    fireEvent.click(container.querySelector('a.pagination-next'));
    expect(onChange).toHaveBeenCalledTimes(1);
    fireEvent.click(container.querySelector('a.pagination-previous'));
    expect(onChange).toHaveBeenCalledTimes(2);
    fireEvent.click(container.querySelectorAll('a.pagination-link')[1]);
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
