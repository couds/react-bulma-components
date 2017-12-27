import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PanelIcon extends PureComponent {
  static displayName = 'Panel.Icon'

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    className: '',
    renderAs: 'span',
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
        className={classnames('panel-icon', className)}
      />
    );
  }
}
