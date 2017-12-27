import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    /**
     * @deprecated please use Card.Header, Card.Content, Card.Footer instead
     */
    type: PropTypes.oneOf(['header', 'header-item', 'header-icon', 'footer', 'footer-item', 'image', 'content']),
  }

  static defaultProps = {
    className: '',
    children: null,
    style: {},
    type: null,
    renderAs: 'div',
  }

  static Image = CardImage
  static Content = CardContent
  static Header = CardHeader
  static Footer = CardFooter

  render() {
    const {
      className,
      children,
      type,
      renderAs,
      ...props
    } = this.props;
    if (type) {
      // eslint-disable-next-line no-console
      console.warn('Deprecation Warning: Prop type is deprecated and will be removed on future release, please use Card.Header, Card.Content and Card.Footer elements instead');
    }
    if (type === 'image') {
      return <CardImage {...props} className={className} />;
    }
    const Element = renderAs;
    return (
      <Element
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

