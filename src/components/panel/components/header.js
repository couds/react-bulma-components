import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PanelHeader extends PureComponent {
  static displayName = 'Panel.Header'

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
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
      <Element
        {...props}
        className={classnames('panel-heading', className)}
      />
    );
  }
}
