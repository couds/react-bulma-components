import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Breadcrumb extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Style of the separator using Bulma
     */
    separator: PropTypes.oneOf(['', 'arrow', 'bullet', 'dot', 'succeeds']),
    /**
     * Size of the Breadcrumb using the bulma classes
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * Alignment of the breadcrumb, by default is Left
     */
    align: PropTypes.oneOf(['', 'right', 'center']),
    /**
     * Array of Links on the breadcrumb
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      name: PropTypes.node,
    })),
    /**
     * if the element is not an `a` html anchor the
     * value needs to be equivalent attribute of the href
     * (ex: For `Link` component from react-router this attribute need to be set to `To`)
     */
    hrefAttr: PropTypes.string,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.oneOfType([
      PropTypes.oneOf(['a', 'button']),
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    items: [],
    hrefAttr: null,
    separator: null,
    renderAs: 'a',
    className: '',
    style: {},
    size: null,
    align: null,
  }

  render() {
    const {
      className,
      style,
      items,
      renderAs,
      hrefAttr,
      separator,
      size,
      align,
    } = this.props;
    if (renderAs !== 'a' && !hrefAttr) {
      console.warn('if renderAs is different the anchor (a), hrefAttr is required. Check Breadcrumb props');
    }
    const Element = renderAs;
    return (
      <nav
        style={style}
        className={classnames('breadcrumb', className, {
          [`has-${separator}-separator`]: separator,
          [`is-${size}`]: size,
          [`is-${align === 'center' ? 'centered' : align}`]: align,
        })}
      >
        <ul>
          {
            items.map((item) => {
              const props = {
                [renderAs === 'a' ? 'href' : hrefAttr]: item.url,
              };
              return (
                <li
                  key={item.url}
                  className={classnames({
                    'is-active': item.active,
                  })}
                >
                  <Element {...props}>
                    {item.name}
                  </Element>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }
}
