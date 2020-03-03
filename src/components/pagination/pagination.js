import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import Element from '../element';

export default class Pagination extends React.PureComponent {
  goToPage = page => evt => {
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
      return null;
    }

    const lastPage = this.lastPage(current, total);
    const firstPage = this.firstPage(current, lastPage);
    const prevDisabled = current === 1 || disabled;
    const nextDisabled = current === total || disabled;

    return (
      <Element
        {...props}
        className={classnames('pagination', className)}
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
  autoHide: PropTypes.bool,
  /**
   * Classname of the container of the pagination, this could be used to customize the inner views
   */
  className: PropTypes.string,
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
  disabled: undefined,
  autoHide: true,
  className: undefined,
  renderAs: 'nav',
};
