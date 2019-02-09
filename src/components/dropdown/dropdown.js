import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Button } from '../button';
import { Icon } from '../icon';
import { DropdownDivider } from './components/divider';
import { DropdownItem } from './components/item';

const colors = Object.values(CONSTANTS.COLORS);

export class Dropdown extends PureComponent {
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
    hoverable: PropTypes.bool,
    label: PropTypes.string
  };

  static defaultProps = {
    ...modifiers.defaultProps,
    className: '',
    style: {},
    value: null,
    children: [],
    onChange: () => {},
    color: null,
    hoverable: false,
    label: ''
  };

  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  close = evt => {
    // IDK yet how to test using the ref in enzime
    if (this.props.hoverable || (evt && this.htmlElement.contains(evt.target))) {
      return;
    }
    this.setState({ open: false });
  };

  toggle = evt => {
    if (this.props.hoverable) {
      return;
    }
    if (evt) {
      evt.preventDefault();
    }
    this.setState(({ open }) => ({ open: !open }));
  };

  select = value => () => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.close();
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { className, children, value, color, right, up, label, hoverable, onChange, ...allProps } = this.props;
    let current = label;
    const props = modifiers.clean(allProps);

    const childrenArray = React.Children.map(children, (child, i) => {
      if (child.type === DropdownItem && ((i === 0 && !label) || child.props.value === value)) {
        current = child.props.children;
      }
      return React.cloneElement(
        child,
        child.type === DropdownItem
          ? {
              active: child.props.value === value,
              onClick: this.select(child.props.value)
            }
          : {}
      );
    });

    return (
      <div
        {...props}
        ref={node => {
          this.htmlElement = node;
        }}
        className={cn('dropdown', modifiers.getClassName(allProps), className, {
          'is-active': this.state.open,
          'is-up': up,
          'is-right': right,
          'is-hoverable': hoverable
        })}
      >
        <div className="dropdown-trigger" role="presentation" onClick={this.toggle}>
          <Button color={color}>
            <span>{current}</span>
            <Icon icon="chevron-down" />
          </Button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">{childrenArray}</div>
        </div>
      </div>
    );
  }
}
