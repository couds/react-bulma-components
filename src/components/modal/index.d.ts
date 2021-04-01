import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutModifiers } from '..';

interface ModalProps {
  show?: boolean;
  onClose?: () => void;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
  domRef?: React.RefObject<HTMLDivElement>;
  document?: Document;
  children: React.ReactNode;
  className?: string;
}

interface ModalCardHeaderProps {
  showClose?: boolean;
  onClose?: () => void;
}

declare const Modal: BulmaComponentWithoutModifiers<ModalProps> & {
  Content: BulmaComponent<{}, 'div'>;
  Card: BulmaComponent<{}, 'div'> & {
    Header: BulmaComponent<ModalCardHeaderProps, 'header'>;
    Body: BulmaComponent<{}, 'section'>;
    Footer: BulmaComponent<{}, 'footer'>;
    Title: BulmaComponent<{}, 'p'>;
  };
};

export default Modal;
