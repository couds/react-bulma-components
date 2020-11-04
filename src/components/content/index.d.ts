import { BulmaComponent } from 'src/components';
import { Size } from 'src/modifiers';

interface ContentProps {
  size?: Size;
}

export const Content: BulmaComponent<ContentProps, 'div'>;
