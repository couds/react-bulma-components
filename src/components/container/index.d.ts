import { BulmaComponent } from '..';
import { Breakpoint } from '../../modifiers';

interface ContainerProps {
  fluid?: boolean;
  breakpoint?: Breakpoint;
}

export const Container: BulmaComponent<ContainerProps, 'div'>;
