import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const Breadcrumb = React.forwardRef(
  ({ className, items, renderAs, hrefAttr, separator, size, align, ...allProps }, ref) => {
    const Element = renderAs;
    const props = modifiers.clean(allProps);
    return (
      <nav
        {...props}
        ref={ref}
        className={cn('breadcrumb', className, modifiers.classnames(allProps), {
          [`has-${separator}-separator`]: separator,
          [`is-${size}`]: size,
          [`is-${align}`]: align
        })}
      >
        <ul>
          {items.map(item => {
            const p = {
              [renderAs === 'a' ? 'href' : hrefAttr]: item.url
            };
            return (
              <li
                key={item.url}
                className={cn({
                  'is-active': item.active
                })}
              >
                <Element {...p}>{item.name}</Element>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

Breadcrumb.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  align: PropTypes.oneOf(['right', 'center']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      name: PropTypes.node
    })
  ),
  renderAs: PropTypes.oneOfType([PropTypes.oneOf(['a']), PropTypes.func]),
  hrefAttr: PropTypes.string
};

Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  items: [],
  hrefAttr: null,
  separator: null,
  renderAs: 'a',
  className: '',
  style: {},
  size: null,
  align: null
};

export default Breadcrumb;
