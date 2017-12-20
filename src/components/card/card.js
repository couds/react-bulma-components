import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';

export default class Card extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    type: PropTypes.oneOf(['header', 'header-item', 'header-icon', 'footer', 'footer-item', 'image', 'content']),
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
      type,
      renderAs,
      ...props
    } = this.props;
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

