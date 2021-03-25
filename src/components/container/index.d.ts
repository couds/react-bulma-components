import { BulmaComponent } from '..';
import { Breakpoint } from '../../modifiers';

interface ContainerProps {
  fluid?: boolean;
  breakpoint?: Breakpoint;
}

declare const Container: BulmaComponent<ContainerProps, 'div'>;

export default Container;