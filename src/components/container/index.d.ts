import { BulmaComponent } from '..';
import { Breakpoint } from '..';

interface ContainerProps {
  fluid?: boolean;
  breakpoint?: Breakpoint;
}

declare const Container: BulmaComponent<ContainerProps, 'div'>;

export default Container;