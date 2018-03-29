import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TagGroup extends PureComponent {
  static displayName = 'Tag.Group'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
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
      gapless,
      ...props
    } = this.props;

    return (
      <span
        {...props}
        className={classnames('tags', className, {
          'has-addons': gapless,
        })}
      >
        {children}
      </span>
    );
  }
}
