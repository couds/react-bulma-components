import { BulmaComponent } from 'src/components';
import { Color, Size } from 'src/modifiers';

interface HeroProps {
  color?: Color;
  gradient?: boolean;
  size?: Size | 'fullheight';
  hasNavbar?: boolean;
}

export const Hero: BulmaComponent<HeroProps, 'section'> & {
  Head: BulmaComponent<{}, 'div'>;
  Body: BulmaComponent<{}, 'div'>;
  Footer: BulmaComponent<{}, 'div'>;
};
