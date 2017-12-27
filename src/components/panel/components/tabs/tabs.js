import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tab from './components/tab';

export default class PanelTabs extends PureComponent {
  static displayName = 'Panel.Tabs'

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

  static Tab = Tab;

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
        className={classnames('panel-tabs', className)}
      />
    );
  }
}
