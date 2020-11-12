import { BulmaComponentWithoutRenderAs } from '..';
import { Color, Size } from '../../modifiers';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
}

export const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;
