import * as React from 'react';
import { ElementProps, RenderAsComponent } from '..';
import { Color } from '..';

interface DropdownProps<T> {
  value?: T;
  onChange?: (newValue: T) => void;
  color?: Color;
  hoverable?: boolean;
  label?: React.ReactNode;
  closeOnSelect?: boolean;
  right?: boolean;
  up?: boolean;
  align?: 'right';
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface DropdownItemProps<T> {
  value: T;
}

declare const Dropdown: (<TValue, TComponent extends RenderAsComponent = 'div'>(
  props: DropdownProps<TValue> &
    ElementProps<DropdownProps<TValue>, TComponent>,
) => React.ReactElement) & {
  Item: <TValue, TComponent extends RenderAsComponent = 'div'>(
    props: DropdownItemProps<TValue> &
      ElementProps<DropdownItemProps<TValue>, TComponent>,
  ) => React.ReactElement;
  Divider: (
    props: Omit<ElementProps<{}, 'hr'>, 'renderAs'>,
  ) => React.ReactElement;
};

export default Dropdown;