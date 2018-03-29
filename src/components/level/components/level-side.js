import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LevelSide extends PureComponent {
  static displayName = 'Level.Side'
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    align: 'left',
  }

  render() {
    const {
      children,
      className,
      renderAs,
      align,
      ...props
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        {...props}
        className={classnames(className, {
          [`level-${align}`]: align,
        })}
      >
        {children}
      </Element>
    );
  }
}
