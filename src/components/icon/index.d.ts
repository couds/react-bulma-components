import { BulmaComponentWithoutRenderAs } from '..';
import { Color, Size } from '..';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
  text?: Boolean;
}

declare const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;

export default Icon;