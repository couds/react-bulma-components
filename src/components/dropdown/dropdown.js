import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';
import Icon from '../icon';
import modifiers from '../../modifiers';

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
    align: PropTypes.oneOf(['right']),
    hoverable: PropTypes.bool,
  }

  static defaultProps = {
    ...modifiers.defaultProps,
    className: '',
    style: {},
    value: undefined,
    children: [],
    onChange: undefined,
    color: undefined,
    align: undefined,
    hoverable: undefined,
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
    if (this.props.hoverable || (evt && evt.path.find(node => node === this.htmlElement))) {
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
      hoverable,
      onChange,
      ...allProps
    } = this.props;
    let current = null;
    const props = modifiers.clean(allProps);

    const childrenArray = React.Children.map(children, (child, i) => {
      if (i === 0 || child.props.value === value) {
        current = child.props.children;
      }
      return React.cloneElement(child, child.type === DropdownItem ? {
        active: child.props.value === value,
        onClick: this.select(child.props.value),
      } : {});
    });

    return (
      <div
        {...props}
        ref={(node) => { this.htmlElement = node; }}
        className={classnames('dropdown', modifiers.classnames(allProps), className, {
          'is-active': this.state.open,
          [`is-${align}`]: align,
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
      </div>
    );
  }
}
