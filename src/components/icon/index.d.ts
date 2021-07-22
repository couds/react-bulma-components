import { BulmaComponent } from '..';
import { Color, Size } from '..';

interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
  text?: Boolean;
}

declare const Icon: BulmaComponent<IconProps, 'span'> & {
  Text: BulmaComponent<{}, 'span'>;
};

export default Icon;