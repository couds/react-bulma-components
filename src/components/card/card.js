import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    renderAs: PropTypes.string,
    /**
     * The type of the card you want to render (See Bulma docs for more info)
     * **default**: the main container
     * **header**: a horizontal bar with a shadow
     * **header-title**: a left-aligned bold text
     * **header-icon**: a placeholder for an icon
     * **image**: a fullwidth container for a reponsive image
     * **content**: a multi-purpose container for any other element
     * **footer**: a horizontal list of controls
     * **footer-item**: a repeatable list item
     */
    type: PropTypes.oneOf(['header', 'header-title', 'header-icon', 'footer', 'footer-item', 'image', 'content']),
  }

  static defaultProps = {
    className: '',
    children: null,
    style: {},
    type: null,
    renderAs: 'div',
  }

  render() {
    const {
      className,
      children,
      style,
      type,
      renderAs,
      ...props
    } = this.props;
    if (type === 'image') {
      return <CardImage {...props} style={style} className={className} />;
    }
    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames(className, {
          [`card-${type}`]: type,
          card: !type,
        })}
        {...props}
      >
        {children}
      </Element>
    );
  }
}

