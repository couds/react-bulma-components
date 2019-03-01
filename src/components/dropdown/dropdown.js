import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';
import Icon from '../icon';
import modifiers from '../../modifiers';
import Element from '../element';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Dropdown extends PureComponent {
  static Item = DropdownItem;

  static Divider = DropdownDivider;

  static propTypes = {
    ...modifiers.propTypes,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    children: PropTypes.node,
    value: PropTypes.any,
    onChange: PropTypes.func,
    color: PropTypes.oneOf(colors),
    right: PropTypes.bool,
    up: PropTypes.bool,
    align: PropTypes.oneOf(['right']),
    hoverable: PropTypes.bool,
    label: PropTypes.string,
  }

  static defaultProps = {
    ...modifiers.defaultProps,
    className: undefined,
    renderAs: 'div',
    domRef: React.createRef(),
    style: undefined,
    value: undefined,
    children: [],
    onChange: undefined,
    color: undefined,
    align: undefined,
    hoverable: undefined,
    label: undefined,
  }

  state = {
    open: false,
  }

  componentDidMount() {
    document.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  close = (evt) => {
    // IDK yet how to test using the ref in enzime
    if (this.props.hoverable || (evt && this.props.domRef && this.props.domRef.current.contains(evt.target))) {
      return;
    }
    this.setState({ open: false });
  }

  toggle = (evt) => {
    if (this.props.hoverable) {
      return;
    }
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({ open }) => ({ open: !open }));
  }

  select = value => () => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.close();
  }

  render() {
    const {
      className,
      children,
      value,
      color,
      align,
      right,
      up,
      hoverable,
      label,
      onChange,
      ...props
    } = this.props;
    let current = label;

    const childrenArray = React.Children.map(children, (child, i) => {
      if (child.type === DropdownItem && ((i === 0 && !label) || child.props.value === value)) {
        current = child.props.children;
      }
      return React.cloneElement(child, child.type === DropdownItem ? {
        active: child.props.value === value,
        onClick: this.select(child.props.value),
      } : {});
    });

    if (align === 'right') {
      // eslint-disable-next-line no-console
      console.warn('react-bulma-components: "Align" prop will be replaced by "right" prop in future releases. Please update your code to avoid breaking changes.');
    }

    return (
      <Element
        {...props}
        className={classnames('dropdown', className, {
          'is-active': this.state.open,
          'is-up': up,
          'is-right': right || align === 'right',
          'is-hoverable': hoverable,
        })}
      >
        <div className="dropdown-trigger" role="presentation" onClick={this.toggle}>
          <Button color={color}>
            <span>
              {current}
            </span>
            <Icon icon="angle-down" size="small" />
          </Button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {childrenArray}
          </div>
        </div>
      </Element>
    );
  }
}
