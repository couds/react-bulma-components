import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PanelTabsTab extends PureComponent {
  static displayName = 'Panel.Tabs.Tab'

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
    renderAs: 'a',
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
        className={classnames(className, {
          'is-active': active,
        })}
      />
    );
  }
}
