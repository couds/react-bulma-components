import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutModifiers } from '..';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
  domRef?: React.RefObject<HTMLDivElement>;
}

interface ModalCardHeadProps {
  showClose?: boolean;
  onClose?: () => void;
}

export const Modal: BulmaComponentWithoutModifiers<ModalProps> & {
  Content: BulmaComponent<{}, 'div'>;
  Card: BulmaComponent<{}, 'div'> & {
    Head: BulmaComponent<ModalCardHeadProps, 'header'>;
    Body: BulmaComponent<{}, 'section'>;
    Footer: BulmaComponent<{}, 'footer'>;
    Title: BulmaComponent<{}, 'p'>;
  };
};
