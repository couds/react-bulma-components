import { BulmaComponent } from '..';
import { Size } from '..';

interface ContentProps {
  size?: Size;
}

declare const Content: BulmaComponent<ContentProps, 'div'>;

export default Content;