import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TagGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    gapless: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    gapless: false,
  }

  render() {
    const {
      children,
      className,
      style,
      gapless,
    } = this.props;

    return (
      <span
        style={style}
        className={classnames('tags', className, {
          'has-addons': gapless,
        })}
      >
        {children}
      </span>
    );
  }
}
