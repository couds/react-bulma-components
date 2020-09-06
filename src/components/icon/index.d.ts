import { BulmaComponentWithoutRenderAs, Color, Size } from '../../index';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
}

export const Icon: BulmaComponentWithoutRenderAs<IconProps, 'span'>;
