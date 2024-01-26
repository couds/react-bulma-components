import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DropdownItem from './components/item';
import DropdownDivider from './components/divider';
import Button from '../button';

import Element from '../element';
import DropdownContext from './components/dropdown-context';

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
  fullwidth,
  ...props
}) => {
  const style = fullwidth ? { width: '100%' } : undefined;
  const ref = useRef(domRef);
  const [isOpen, setIsOpen] = useState(false);
  const close = (evt) => {
    // istanbul ignore if
    if (hoverable || (evt && ref.current && ref.current.contains(evt.target))) {
      return;
    }
    if (ref.current) {
      setIsOpen(false);
    }
  };

  const onSelect = (selectedValue) => {
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

  const currentLabel = React.Children.toArray(children)
    .filter((child) => {
      return child.type === DropdownItem;
    })
    .reduce((current, child, i) => {
      if ((i === 0 && !current) || child.props.value === value) {
        return child.props.children;
      }
      return current;
    }, label);

  return (
    <DropdownContext.Provider value={{ onSelect, value }}>
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
          style={style}
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
            fullwidth={fullwidth}
            style={fullwidth ? { justifyContent: 'space-between' } : undefined}
          >
            <span>{currentLabel}</span>
            {icon}
          </Button>
        </div>
        <div className="dropdown-menu" id={menuId} role="menu" style={style}>
          <div className="dropdown-content">{children}</div>
        </div>
      </Element>
    </DropdownContext.Provider>
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
