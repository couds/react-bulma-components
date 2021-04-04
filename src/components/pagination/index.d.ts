import * as React from 'react';
import { BulmaComponent } from '..';
import { Size } from '..';

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
  align?: 'center' | 'right';
  rounded?: boolean;
  autoHide?: boolean;
}

declare const Pagination: BulmaComponent<PaginationProps, 'nav'>;

export default Pagination;
