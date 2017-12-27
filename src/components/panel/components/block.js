import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PanelHeader extends PureComponent {
  static displayName = 'Panel.Block'

  static propTypes = {
    className: PropTypes.string,
    renderAs: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    active: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    renderAs: 'div',
    active: false,
  }
  render() {
    const {
      className,
      renderAs,
      active,
      ...props
    } = this.props;
    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames('panel-block', className, {
          'is-active': active,
        })}
      />
    );
  }
}
