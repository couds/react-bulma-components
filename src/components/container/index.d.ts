import { BulmaComponent } from 'src/components';
import { Breakpoint } from 'src/modifiers';

interface ContainerProps {
  fluid?: boolean;
  breakpoint?: Breakpoint;
}

export const Container: BulmaComponent<ContainerProps, 'div'>;
