import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardFooterItem from './components/footer-item';

export default class CardFooter extends React.PureComponent {
  static displayName = 'Card.Footer'

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    className: '',
    renderAs: 'div',
  }

  static Item = CardFooterItem

  render() {
    const {
      className,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element {...props} className={classnames('card-footer', className)} />
    );
  }
}
