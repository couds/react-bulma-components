import { BulmaComponentWithoutRenderAs } from '..';
import { Size } from '../../modifiers'

interface ProgressProps {
  value: number;
  max: number;
  size?: Size;
}

export const Progress: BulmaComponentWithoutRenderAs<ProgressProps, 'progress'>;
