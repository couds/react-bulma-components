import * as React from 'react';
import {
  ElementProps,
  OmitKeys,
  BulmaComponent,
  BulmaComponentWithoutRenderAs,
  Color,
  Size,
} from '..';

type InputSize = Size & 'normal';

interface FieldProps {
  align?: 'center' | 'right';
  kind?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
}

interface FieldLabelProps {
  size?: InputSize;
}

interface ControlProps {
  fullwidth?: boolean;
  loading?: boolean;
  iconType?: React.ElementType,
}

interface InputProps<T> {
  size?: InputSize;
  color?: Color;
  readOnly?: boolean;
  isStatic?: boolean;
  status?: 'focus' | 'hover';
  value?: T;
}

interface LabelProps {
  size?: InputSize;
}

interface TextareaProps {
  size?: InputSize;
  color?: Color;
  fixedSize?: boolean;
}

interface SelectProps<T> {
  size?: InputSize;
  color?: Color;
  value?: T;
  loading?: boolean;
  status?: 'focus' | 'hover';
  multiple?: boolean;
  fullwidth?: boolean;
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Color;
  size?: InputSize;
  filename?: string;
  value?: FileList;
  fullwidth?: boolean;
  align?: 'center' | 'right';
  boxed?: boolean;
  label?: string;
  icon?: React.ReactElement;
  inputProps?: OmitKeys<'onChange', React.HTMLAttributes<'input'>>;
}

declare const Form: {
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

export default Form;
