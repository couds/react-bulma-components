import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CONSTANTS from '../../constants';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';

import Element from '../element';

const colors = [null].concat(Object.values(CONSTANTS.COLORS));

const Dropdown = ({
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
  closeOnSelect,
  icon,
  domRef,
  ...props
}) => {
  const ref = useRef(domRef);
  const [isOpen, setIsOpen] = useState(false);
  const close = (evt) => {
    // IDK yet how to test using the ref in enzime
    // istanbul ignore if
    if (
      hoverable ||
      (evt && ref && ref.current && ref.current.contains(evt.target))
    ) {
      return;
    }
    if (ref.current) {
      setIsOpen(false);
    }
  };

  const onSelect = (selectedValue) => () => {
    if (onChange) {
      onChange(selectedValue);
    }
    if (closeOnSelect) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('click', close);
    return () => {
      window.removeEventListener('click', close);
    };
  }, []);

  let current = label;

  const childrenArray = React.Children.map(children, (child, i) => {
    if (
      child.type === DropdownItem &&
      ((i === 0 && !label) || child.props.value === value)
    ) {
      current = child.props.children;
    }
    return React.cloneElement(
      child,
      child.type === DropdownItem
        ? {
            active: child.props.value === value,
            onClick: onSelect(child.props.value),
          }
        : {},
    );
  });

  return (
    <Element
      {...props}
      domRef={ref}
      className={classnames('dropdown', className, {
        'is-active': isOpen,
        'is-up': up,
        'is-right': right || align === 'right',
        'is-hoverable': hoverable,
      })}
    >
      <div
        className="dropdown-trigger"
        role="presentation"
        onClick={() => setIsOpen((o) => !o)}
      >
        <Button color={color}>
          <span>{current}</span>
          {icon}
        </Button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{childrenArray}</div>
      </div>
    </Element>
  );
};

// class Dropdown2 extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.domRef = props.domRef || React.createRef();
//     this.state = {
//       open: false,
//     };
//   }

//   componentDidMount() {
//     document.addEventListener('click', this.close);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('click', this.close);
//   }

//   toggle = (evt) => {
//     if (this.props.hoverable) {
//       return;
//     }
//     if (evt) {
//       evt.preventDefault();
//     }
//     this.setState(({ open }) => ({ open: !open }));
//   };

//   select = (value) => () => {
//     if (this.props.onChange) {
//       this.props.onChange(value);
//     }
//     if (this.props.closeOnSelect) {
//       this.close();
//     }
//   };

//   render() {
//     const {
//       className,
//       children,
//       value,
//       color,
//       align,
//       right,
//       up,
//       hoverable,
//       label,
//       onChange,
//       closeOnSelect,
//       icon,
//       ...props
//     } = this.props;
//     let current = label;

//     const childrenArray = React.Children.map(children, (child, i) => {
//       if (
//         child.type === DropdownItem &&
//         ((i === 0 && !label) || child.props.value === value)
//       ) {
//         current = child.props.children;
//       }
//       return React.cloneElement(
//         child,
//         child.type === DropdownItem
//           ? {
//               active: child.props.value === value,
//               onClick: this.select(child.props.value),
//             }
//           : {},
//       );
//     });

//     return (
//       <Element
//         {...props}
//         domRef={this.domRef}
//         className={classnames('dropdown', className, {
//           'is-active': this.state.open,
//           'is-up': up,
//           'is-right': right || align === 'right',
//           'is-hoverable': hoverable,
//         })}
//       >
//         <div
//           className="dropdown-trigger"
//           role="presentation"
//           onClick={this.toggle}
//         >
//           <Button color={color}>
//             <span>{current}</span>
//             {icon}
//           </Button>
//         </div>
//         <div className="dropdown-menu" id="dropdown-menu" role="menu">
//           <div className="dropdown-content">{childrenArray}</div>
//         </div>
//       </Element>
//     );
//   }
// }

Dropdown.Item = DropdownItem;

Dropdown.Divider = DropdownDivider;

Dropdown.propTypes = {
  ...Element.propTypes,
  /**
   * The value of the currently selected dropdown item.
   */
  value: PropTypes.any,
  /**
   * Called when a dropdown item is selected.
   */
  onChange: PropTypes.func,
  /**
   * The color of the dropdown button.
   */
  color: PropTypes.oneOf(colors),
  /**
   * Whether the dropdown should align to the right side.
   */
  right: PropTypes.bool,
  /**
   * Whether the dropdown menu should appear above the dropdown button
   * instead of below.
   */
  up: PropTypes.bool,
  /**
   * @deprecated
   */
  align: PropTypes.oneOf(['right']),
  /**
   * Whether the dropdown menu can be activated when the cursor
   * hovers above the button without clicking.
   */
  hoverable: PropTypes.bool,
  /**
   * A string, or a react component that displays the label of the dropdown
   * button.
   */
  label: PropTypes.node,
  /**
   * Whether the dropdown menu should be closed when a dropdown item is selected.
   */
  closeOnSelect: PropTypes.bool,
  /**
   * A react component that draws the icon of the dropdown button.
   * Usually it is an arrow (or a chevron) pointing downwards (or upwards).
   */
  icon: PropTypes.node,
  /**
   * Additional CSS classes to pass to `<Dropdown />`.
   * They will sit alongside pre-applied bulma classes.
   */
  className: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

Dropdown.defaultProps = {
  ...Element.defaultProps,
  closeOnSelect: true,
  className: undefined,
  renderAs: 'div',
  domRef: undefined,
  style: undefined,
  value: undefined,
  children: [],
  onChange: undefined,
  color: undefined,
  align: undefined,
  hoverable: undefined,
  label: undefined,
  icon: undefined,
};

export default Dropdown;
