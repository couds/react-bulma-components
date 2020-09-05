import { Breakpoint, BulmaComponent } from '../../../index';

interface ContainerProps {
  fluid?: boolean;
  breakpoint?: Breakpoint;
}

export const Container: BulmaComponent<ContainerProps, 'div'>;
