import * as React from 'react';
import {
  ElementProps,
  OmitKeys,
  BulmaComponent,
  BulmaComponentWithoutRenderAs,
} from 'src/components';
import { Color, Size } from 'src/modifiers';

interface FieldProps {
  align?: 'centered' | 'right';
  kind?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
}

interface FieldLabelProps {
  size?: Size | 'small';
}

interface ControlProps {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: Size;
}

interface InputProps<T> {
  type?:
    | 'text'
    | 'email'
    | 'tel'
    | 'password'
    | 'number'
    | 'search'
    | 'color'
    | 'date'
    | 'time'
    | 'datetime-local';
  size?: Size;
  color?: Color;
  readOnly?: boolean;
  isStatic?: boolean;
  value?: T;
}

interface LabelProps {
  size?: Size;
}

interface TextareaProps {
  size?: Size;
  color?: Color;
  readOnly?: boolean;
}

interface SelectProps<T> {
  size?: Size;
  color?: Color;
  readOnly?: boolean;
  value?: T;
  loading?: boolean;
  multiple?: boolean;
}

interface CheckboxProps {
  value?: string;
}

interface RadioProps {
  value?: string;
}

interface HelpProps {
  color?: Color;
}

interface InputFileProps {
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  color?: Color;
  size?: Size;
  fileName?: string;
  fullwidth?: boolean;
  right?: boolean;
  boxed?: boolean;
  label?: string;
  icon?: React.ReactElement;
  inputProps?: React.HTMLAttributes<'input'>;
}

export const Form: {
  Field: BulmaComponent<FieldProps, 'div'> & {
    Label: BulmaComponent<FieldLabelProps, 'div'>;
    Body: BulmaComponent<{}, 'div'>;
  };
  Control: BulmaComponent<ControlProps, 'div'>;
  Input: <TValue>(
    props: OmitKeys<
      InputProps<TValue> & ElementProps<InputProps<TValue>, 'input'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Label: BulmaComponentWithoutRenderAs<LabelProps, 'label'>;
  Textarea: (
    props: OmitKeys<
      TextareaProps & ElementProps<TextareaProps, 'textarea'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Select: <TValue>(
    props: OmitKeys<
      SelectProps<TValue> & ElementProps<SelectProps<TValue>, 'select'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Checkbox: (
    props: OmitKeys<
      CheckboxProps & ElementProps<CheckboxProps, 'input'>,
      'renderAs'
    >,
  ) => React.ReactElement;
  Radio: (
    props: OmitKeys<RadioProps & ElementProps<RadioProps, 'input'>, 'renderAs'>,
  ) => React.ReactElement;
  Help: BulmaComponent<HelpProps, 'p'>;
  InputFile: BulmaComponent<InputFileProps, 'div'>;
};
