import { BulmaComponent } from '..';
import { Size } from '..'

interface SectionProps {
  size?: Exclude<Size, 'small'>;
}

declare const Section: BulmaComponent<SectionProps, 'section'>;

export default Section;