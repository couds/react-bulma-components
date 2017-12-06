import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';
import Icon from '../icon';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

export default class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * Currently selected value of the dropdown
     */
    value: PropTypes.any,
    /**
     * Function that will be called when the selected value change
     */
    onChange: PropTypes.func,
    /**
     * The color of dropdown using the classes from Bulma
     */
    color: PropTypes.oneOf(colors),
    /**
     * Alignment of the Dropdown, by default is Left
     */
    align: PropTypes.oneOf(['right']),
    /**
     * True if you want to open the dropdown on mouse hover
     */
    hoverable: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    style: {},
    value: null,
    children: [],
    onChange: null,
    color: null,
    align: null,
    hoverable: false,
  }

  static Item = DropdownItem;
  static Divider = DropdownDivider;

  constructor(props) {
    super(props);
    this.checkProps(props);
  }

  state = {
    open: false,
  }

  componentDidMount() {
    document.addEventListener('click', this.close);
  }

  componentWillReceiveProps(nextProps) {
    this.checkProps({ ...this.props, ...nextProps });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  checkProps = (props) => {
    if (props.value && !props.onChange) {
      console.error('Warning: This is a controlled component without onChange listener, please check the props of the Dropdown component');
    }
  }

  close = (evt) => {
    // IDK yet how to test using the ref in enzime
    /* istanbul ignore next */
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
    this.setState({ open: !this.state.open });
  }

  select = value => () => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
    this.close();
  }

  render() {
    const {
      style,
      className,
      children,
      value,
      color,
      align,
      hoverable,
    } = this.props;
    let current = null;

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
        ref={(node) => { this.htmlElement = node; }}
        style={style}
        className={classnames('dropdown', className, {
          'is-active': this.state.open,
          [`is-${align}`]: align,
          'is-hoverable': hoverable,
        })}
      >
        <div className="dropdown-trigger" role="presentation" onClick={this.toggle}>
          <Button color={color}>
            <span>{current}</span>
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
