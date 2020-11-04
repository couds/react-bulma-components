import { BulmaComponentWithoutRenderAs } from 'src/components';
import { Size } from 'src/modifiers'

interface ProgressProps {
  value: number;
  max: number;
  size?: Size;
}

export const Progress: BulmaComponentWithoutRenderAs<ProgressProps, 'progress'>;
