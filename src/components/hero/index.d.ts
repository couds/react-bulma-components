import { BulmaComponent } from '..';
import { Color, Size } from '..';

interface HeroProps {
  color?: Color;
  gradient?: boolean;
  size?: Size | 'halfheight'| 'fullheight';
  hasNavbar?: boolean;
}

declare const Hero: BulmaComponent<HeroProps, 'section'> & {
  Header: BulmaComponent<{}, 'div'>;
  Body: BulmaComponent<{}, 'div'>;
  Footer: BulmaComponent<{}, 'div'>;
};

export default Hero;