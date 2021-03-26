import { BulmaComponentWithoutRenderAs } from '..';
import { Color, Size } from '../../modifiers';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
}

declare const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;

export default Icon;