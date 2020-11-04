import * as React from 'react';
import { BulmaComponent } from 'src/components';
import { Size } from 'src/modifiers';

interface PaginationProps {
  current?: number;
  disabled?: boolean;
  total?: number;
  delta?: number;
  onChange?: (page: number) => void;
  next?: React.ReactNode;
  previous?: React.ReactNode;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  size?: Size;
  position?: 'centered' | 'right';
  rounded?: boolean;
  autoHide?: boolean;
}

export const Pagination: BulmaComponent<PaginationProps, 'nav'>;
