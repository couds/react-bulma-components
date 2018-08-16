import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Pagination extends React.PureComponent {
  static propTypes = {
    /** Current page */
    current: PropTypes.number,
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
  }

  static defaultProps = {
    total: 1,
    current: 1,
    delta: 1,
    onChange: () => { },
    next: 'Next',
    previous: 'Previous',
    showPrevNext: true,
    showFirstLast: false,
    autoHide: true,
    className: '',
  };

  goToPage = page => (evt) => {
    evt.preventDefault();
    this.props.onChange(page);
  }

  firstPage = (current, total) => {
    if (current === 1) {
      return 1;
    }

    const page = current - (this.props.delta * (current === total ? 2 : 1));

    return page <= 0 ? 1 : page;
  }

  lastPage = (current, total) => {
    if (current === total) {
      return total;
    }

    const page = current + (this.props.delta * (current === 1 ? 2 : 1));

    return page > total ? total : page;
  }

  render() {
    const {
      current,
      total,
      next,
      previous,
      showPrevNext,
      showFirstLast,
      delta,
      autoHide,
      className,
      onChange,
      ...props
    } = this.props;
    if (total <= 1 && autoHide) {
      return null;
    }

    if (current > total) {
      // eslint-disable-next-line no-console
      console.warn('Pagination controller: Current page can not be greater than total');
      return null;
    }

    const firstPage = this.firstPage(current, total);
    const lastPage = this.lastPage(current, total);

    return (
      <nav
        {...props}
        className={classnames('pagination', className)}
        aria-label="pagination"
      >
        {showPrevNext && (
          <React.Fragment>
            <a
              role="button"
              tabIndex={0}
              onClick={current === 1 ? undefined : this.goToPage(current - 1)}
              className="pagination-previous"
              title="This is the first page"
              disabled={current === 1}
            >
              {previous}
            </a>
            <a
              role="button"
              tabIndex={0}
              onClick={
                current === total ? undefined : this.goToPage(current + 1)
              }
              className="pagination-next"
              disabled={current === total}
            >
              {next}
            </a>
          </React.Fragment>
        )}
        {delta > 0 && (
          <React.Fragment>
            <ul className="pagination-list">
              {showFirstLast && current !== 1 &&
                current > delta + 1 && (
                  <React.Fragment>
                    <li>
                      <a
                        role="button"
                        className="pagination-link"
                        aria-label="Goto page 1"
                        tabIndex={0}
                        onClick={this.goToPage(1)}
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                  </React.Fragment>
                )}
              {Array((lastPage - firstPage) + 1)
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
                    >
                      {i + firstPage}
                    </a>
                  </li>
                ))}
              {showFirstLast && current !== total &&
                current + delta < total && (
                  <React.Fragment>
                    <li>
                      <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                      <a
                        role="button"
                        className="pagination-link"
                        aria-label={`Goto page ${total}`}
                        tabIndex={0}
                        onClick={this.goToPage(total)}
                      >
                        {total}
                      </a>
                    </li>
                  </React.Fragment>
                )}
            </ul>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default Pagination;
