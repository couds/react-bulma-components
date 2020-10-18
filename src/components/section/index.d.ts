import { BulmaComponent } from 'src/components';
import { Size } from 'src/modifiers'

interface SectionProps {
  size?: Exclude<Size, 'small'>;
}

export const Section: BulmaComponent<SectionProps, 'section'>;
