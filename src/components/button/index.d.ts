import { BulmaComponent } from '..';
import { Color, Size } from '..';

interface ButtonProps {
  onClick?: () => void;
  color?: Color;
  size?: Size;
  state?: 'hover' | 'focus' | 'active' | 'loading';
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