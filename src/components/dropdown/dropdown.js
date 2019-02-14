import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Button } from '../button';
import { Icon } from '../icon';
import { DropdownDivider } from './components/divider';
import { DropdownItem } from './components/item';

const colors = Object.values(CONSTANTS.COLORS);

export const dropdownStateHook = () => {
  const [open, setOpen] = useState(false);

  return { open, setOpen };
};

export const Dropdown = ({ className, children, value, color, right, up, label, hoverable, onChange, ...allProps }) => {
  useEffect(() => {
    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
    };
  });

  const { open, setOpen } = dropdownStateHook();

  const props = modifiers.clean(allProps);

  let current = label;
  let htmlElement;

  const close = evt => {
    // IDK yet how to test using the ref in enzime
    if (hoverable || (evt && htmlElement.contains(evt.target))) {
      return;
    }
    setOpen(false);
  };

  const toggle = evt => {
    if (evt) {
      evt.preventDefault();
    }
    if (hoverable) {
      return;
    }
    setOpen(!open);
  };

  const select = value => () => {
    if (onChange) {
      onChange(value);
    }
    close();
  };

  const childrenArray = React.Children.map(children, (child, i) => {
    if (child.type === DropdownItem && ((i === 0 && !label) || child.props.value === value)) {
      current = child.props.children;
    }
    return React.cloneElement(
      child,
      child.type === DropdownItem
        ? {
            active: child.props.value === value,
            onClick: select(child.props.value)
          }
        : {}
    );
  });

  return (
    <div
      {...props}
      ref={node => {
        htmlElement = node;
      }}
      data-testid="dropdown-container"
      className={cn('dropdown', modifiers.getClassName(allProps), className, {
        'is-active': open,
        'is-up': up,
        'is-right': right,
        'is-hoverable': hoverable
      })}
    >
      <div data-testid="dropdown-trigger" role="presentation" onClick={toggle}>
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
};

Dropdown.propTypes = {
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

Dropdown.defaultProps = {
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

Dropdown.Item = DropdownItem;

Dropdown.Divider = DropdownDivider;
