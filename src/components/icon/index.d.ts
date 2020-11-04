import { BulmaComponentWithoutRenderAs } from 'src/components';
import { Color, Size } from 'src/modifiers';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
}

export const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;
