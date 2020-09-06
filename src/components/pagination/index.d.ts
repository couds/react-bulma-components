import * as React from 'react';
import { BulmaComponent } from '../../index';

interface PaginationProps {
  current?: number;
  disabled?: boolean;
  total?: number;
  delta?: number;
  onChange?: (page: number) => void;
  next?: React.ReactNode;
  previous?: React.ReactNode;
  showPrevNext?: boolean;
  autoHide?: boolean;
}

export const Pagination: BulmaComponent<PaginationProps, 'nav'>;
