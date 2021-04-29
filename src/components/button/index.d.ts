import { BulmaComponent } from '..';
import { Color, Size } from '..';

interface ButtonProps {
  color?: Color
  | 'ghost'
  | 'black-bis'
  | 'black-ter'
  | 'white-bis'
  | 'white-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey-light'
  | 'grey-lighter';
  size?: Size;
  state?: 'hover' | 'focus' | 'active';
  outlined?: boolean;
  inverted?: boolean;
  submit?: boolean;
  reset?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
  remove?: boolean;
  isSelected?: boolean;
  isStatic?: boolean;
  rounded?: boolean;
  text?: boolean;
}

interface ButtonGroupProps {
  size?: Size;
  hasAddons?: boolean;
  align?: 'center' | 'right';
}

declare const Button: BulmaComponent<ButtonProps, 'button'> & {
  Group: BulmaComponent<ButtonGroupProps, 'div'>;
};

export default Button