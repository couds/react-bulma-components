import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import modifiers from '../../modifiers';
import renderAsShape from '../../modifiers/render-as';
import Element from '../element';

const Breadcrumb = ({
  className,
  items,
  renderAs,
  hrefAttr,
  separator,
  size,
  align,
  ...props
}) => (
  <Element
    renderAs="nav"
    {...props}
    className={classnames('breadcrumb', className, {
      [`has-${separator}-separator`]: separator,
      [`is-${size}`]: size,
      [`is-${align}`]: align,
    })}
  >
    <ul>
      {items.map(item => {
        const p = {
          renderAs,
          [hrefAttr]: item.url,
        };
        return (
          <li
            key={item.url}
            className={classnames({
              'is-active': item.active,
            })}
          >
            <Element {...p}>{item.name}</Element>
          </li>
        );
      })}
    </ul>
  </Element>
);

Breadcrumb.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['right', 'center']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      name: PropTypes.node,
    }),
  ),
  renderAs: renderAsShape,
  hrefAttr: PropTypes.string,
};

Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  items: [],
  hrefAttr: 'href',
  separator: undefined,
  renderAs: 'a',
  className: undefined,
  style: undefined,
  size: undefined,
  align: undefined,
};

export default Breadcrumb;
