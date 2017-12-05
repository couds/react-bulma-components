import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class FieldBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
  }
  render() {
    const {
      children,
      className,
      style,
      renderAs,
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        style={style}
        className={classnames('field-body', className, {
        })}
      >
        {children}
      </Element>
    );
  }
}
