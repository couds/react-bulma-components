import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LevelSide extends PureComponent {
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
      style,
      renderAs,
      align,
    } = this.props;

    const Element = renderAs;
    return (
      <Element
        style={style}
        className={classnames(className, {
          [`level-${align}`]: align,
        })}
      >
        {children}
      </Element>
    );
  }
}
