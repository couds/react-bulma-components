import { BulmaComponentWithoutRenderAs, Size } from '../../index';

interface ProgressProps {
  value: number;
  max: number;
  size?: Size;
}

export const Progress: BulmaComponentWithoutRenderAs<ProgressProps, 'progress'>;
