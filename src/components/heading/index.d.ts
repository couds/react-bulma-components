import { BulmaComponent } from '..';

interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
  subtitle?: boolean;
  heading?: boolean;
  spaced?: boolean;
}

declare const Heading: BulmaComponent<HeadingProps, 'h1'>;

export default Heading;