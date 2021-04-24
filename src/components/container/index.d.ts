import { BulmaComponent } from '..';
import { Breakpoint } from '..';

interface ContainerProps {
  max?: boolean;
  breakpoint?: Breakpoint | 'fluid';
}

declare const Container: BulmaComponent<ContainerProps, 'div'>;

export default Container;