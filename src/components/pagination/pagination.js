import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Pagination = React.forwardRef(
  (
    { current, total, delta, showPrevNext, next, previous, position, size, rounded, className, onChange, ...props },
    ref
  ) => (
    <Element
      {...props}
      ref={ref}
      className={cn('pagination', className, {
        [`is-rounded`]: rounded,
        [`is-${size}`]: size,
        [`is-${position}`]: position
      })}
      aria-label="pagination"
    >
      <ReactPaginate
        previousLabel={showPrevNext && previous}
        previousLinkClassName={showPrevNext ? 'pagination-previous' : ''}
        nextLabel={showPrevNext && next}
        nextLinkClassName={showPrevNext ? 'pagination-next' : ''}
        breakLinkClassName={'pagination-ellipsis'}
        activeLinkClassName={'is-current'}
        pageCount={total}
        forcePage={current}
        marginPagesDisplayed={2}
        pageRangeDisplayed={delta}
        onPageChange={onChange}
        pageLinkClassName={'pagination-link'}
        containerClassName={'pagination-list'}
        activeClassName={'active'}
      />
    </Element>
  )
);

Pagination.propTypes = {
  ...modifiers.propTypes,
  current: PropTypes.number,
  total: PropTypes.number,
  delta: PropTypes.number,
  onChange: PropTypes.func,
  next: PropTypes.node,
  previous: PropTypes.node,
  position: PropTypes.oneOf([null, 'centered', 'right']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  showPrevNext: PropTypes.bool,
  rounded: PropTypes.bool,
  autoHide: PropTypes.bool,
  className: PropTypes.string
};

Pagination.defaultProps = {
  ...modifiers.defaultProps,
  total: 1,
  current: 0,
  delta: 5,
  onChange: () => {},
  next: 'Next',
  previous: 'Previous',
  position: null,
  size: null,
  showPrevNext: false,
  rounded: false,
  className: '',
  renderAs: 'nav'
};
