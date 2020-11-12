import { BulmaComponent } from '..';
import { Size } from '../../modifiers'

interface SectionProps {
  size?: Exclude<Size, 'small'>;
}

export const Section: BulmaComponent<SectionProps, 'section'>;
