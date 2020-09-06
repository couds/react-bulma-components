import { BulmaComponent } from '../../index';

interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
  subtitle?: boolean;
  heading?: boolean;
  spaced?: boolean;
}

export const Heading: BulmaComponent<HeadingProps, 'h1'>;
