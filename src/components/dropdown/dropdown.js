import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';

import Element from '../element';

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
  disabled,
  menuId,
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

  const onSelect = (selectedValue) => {
    return () => {
      if (onChange) {
        onChange(selectedValue);
      }
      if (closeOnSelect) {
        close();
      }
    };
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
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsOpen((open) => {
            return !open;
          });
        }}
      >
        <Button
          disabled={disabled}
          color={color}
          aria-haspopup
          aria-controls={menuId}
        >
          <span>{current}</span>
          {icon}
        </Button>
      </div>
      <div className="dropdown-menu" id={menuId} role="menu">
        <div className="dropdown-content">{childrenArray}</div>
      </div>
    </Element>
  );
};

Dropdown.Item = DropdownItem;

Dropdown.Divider = DropdownDivider;

Dropdown.propTypes = {
  /**
   * The value of the currently selected dropdown item. If this value match
   * with the value passed to a Dropdown.item it will be used as label if the label prop its empty
   */
  value: PropTypes.any,
  /**
   * Called when a dropdown item is selected.
   */
  onChange: PropTypes.func,
  /**
   * The color of the dropdown button.
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOf([
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
      'dark',
      'text',
    ]),
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
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
   * Whether the dropdown menu can be activated when the cursor
   * hovers above the button without clicking.
   */
  hoverable: PropTypes.bool,
  /**
   * A string, or a react component that displays the label of the dropdown
   * button. if not set it will be use the selected Dropdown.Item or the first one
   * if there is no selected
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
   * Specify the id of the menu component.
   * Default is "dropdown-menu".
   */
  menuId: PropTypes.string,
};

Dropdown.defaultProps = {
  closeOnSelect: true,
  menuId: 'dropdown-menu',
};

export default Dropdown;
