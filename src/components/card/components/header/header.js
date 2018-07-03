import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardHeaderTitle from './components/header-title';
import CardHeaderIcon from './components/header-icon';

export default class CardHeader extends React.PureComponent {
  static Title = CardHeaderTitle

  static Icon = CardHeaderIcon

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    className: '',
    renderAs: 'div',
  }

  render() {
    const {
      className,
      renderAs,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element {...props} className={classnames('card-header', className)} />
    );
  }
}
