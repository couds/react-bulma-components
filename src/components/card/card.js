import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CardImage from './components/image';
import CardContent from './components/content';
import CardHeader from './components/header';
import CardFooter from './components/footer';

export default class Card extends PureComponent {
  static Image = CardImage

  static Content = CardContent

  static Header = CardHeader

  static Footer = CardFooter

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    className: '',
    children: null,
    style: {},
    renderAs: 'div',
  }

  render() {
    const {
      className,
      children,
      renderAs,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        className={classnames('card', className)}
        {...props}
      >
        {children}
      </Element>
    );
  }
}
