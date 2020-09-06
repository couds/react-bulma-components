import { BulmaComponent, Size } from '../../index';

interface SectionProps {
  size?: Exclude<Size, 'small'>;
}

export const Section: BulmaComponent<SectionProps, 'section'>;
