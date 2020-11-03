import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

export default class Pagination extends React.PureComponent {
  goToPage = (page) => (evt) => {
    evt.preventDefault();
    const { onChange } = this.props;
    onChange(page);
  };

  firstPage = (current, last) => {
    const { delta } = this.props;

    if (current === 1) {
      return 1;
    }

    const minPage = last - delta * 2;
    const page = Math.min(current - delta, minPage);

    return page <= 0 ? 1 : page;
  };

  lastPage = (current, total) => {
    const { delta } = this.props;

    if (current === total) {
      return total;
    }

    const maxPage = delta * 2 + 1;
    const page = Math.max(current + delta, maxPage);
    return page > total ? total : page;
  };

  render() {
    const {
      current,
      disabled,
      total,
      next,
      previous,
      showPrevNext,
      showFirstLast,
      delta,
      autoHide,
      className,
      size,
      position,
      rounded,
      onChange,
      ...props
    } = this.props;
    if (total <= 1 && autoHide) {
      return null;
    }

    if (current > total) {
      return null;
    }

    const lastPage = this.lastPage(current, total);
    const firstPage = this.firstPage(current, lastPage);
    const prevDisabled = current === 1 || disabled;
    const nextDisabled = current === total || disabled;

    return (
      <Element
        {...props}
        className={classnames('pagination', className, {
          [`is-${size}`]: size,
          [`is-${position}`]: position,
          'is-rounded': rounded,
        })}
        aria-label="pagination"
      >
        {showPrevNext && (
          <>
            <a
              role="button"
              tabIndex={0}
              onClick={prevDisabled ? undefined : this.goToPage(current - 1)}
              className="pagination-previous"
              title="This is the first page"
              disabled={prevDisabled}
            >
              {previous}
            </a>
            <a
              role="button"
              tabIndex={0}
              onClick={nextDisabled ? undefined : this.goToPage(current + 1)}
              className="pagination-next"
              disabled={nextDisabled}
            >
              {next}
            </a>
          </>
        )}
        {delta > 0 && (
          <>
            <ul className="pagination-list">
              {showFirstLast && current !== 1 && firstPage !== 1 && (
                <>
                  <li key={1}>
                    <a
                      role="button"
                      tabIndex={0}
                      className="pagination-link"
                      onClick={this.goToPage(1)}
                      aria-label="Page 1"
                      aria-current="page"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                </>
              )}
              {Array(lastPage - firstPage + 1)
                .fill(0)
                .map((_, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={i + firstPage}>
                    <a
                      role="button"
                      tabIndex={0}
                      className={classnames('pagination-link', {
                        'is-current': current === i + firstPage,
                      })}
                      onClick={
                        current === firstPage + i
                          ? undefined
                          : this.goToPage(firstPage + i)
                      }
                      aria-label={`Page ${i + firstPage}`}
                      aria-current="page"
                      disabled={disabled}
                    >
                      {i + firstPage}
                    </a>
                  </li>
                ))}
              {showFirstLast && current !== lastPage && total !== lastPage && (
                <>
                  <li key={total}>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a
                      role="button"
                      tabIndex={0}
                      className="pagination-link"
                      onClick={this.goToPage(total)}
                      aria-label={`Page ${total}`}
                      aria-current="page"
                    >
                      {total}
                    </a>
                  </li>
                </>
              )}
            </ul>
          </>
        )}
      </Element>
    );
  }
}

Pagination.propTypes = {
  ...modifiers.propTypes,
  /** Current page */
  current: PropTypes.number,
  /** whether to disable the buttons */
  disabled: PropTypes.bool,
  /** Total pages in total */
  total: PropTypes.number,
  /** Amount og pages to display at the left and right of the current (if delta 2 and current page is 3, the paginator will display pages from 1 to 5) */
  delta: PropTypes.number,
  onChange: PropTypes.func,
  /** Text of the Next button */
  next: PropTypes.node,
  /** Text of the Previous button */
  previous: PropTypes.node,
  showPrevNext: PropTypes.bool,
  showFirstLast: PropTypes.bool,
  autoHide: PropTypes.bool,
  /**
   * Classname of the container of the pagination, this could be used to customize the inner views
   */
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  position: PropTypes.oneOf(['centered', 'right']),
  rounded: PropTypes.bool,
};

Pagination.defaultProps = {
  ...modifiers.defaultProps,
  total: 1,
  current: 1,
  delta: 1,
  onChange: () => {},
  next: 'Next',
  previous: 'Previous',
  showPrevNext: true,
  showFirstLast: false,
  disabled: undefined,
  autoHide: true,
  className: undefined,
  size: undefined,
  position: undefined,
  rounded: false,
  renderAs: 'nav',
};
