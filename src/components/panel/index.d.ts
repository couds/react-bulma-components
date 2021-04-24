import { BulmaComponent } from '..';
import { Color } from '..';

interface PanelProps {
  color?: Color;
}

interface PanelTabProps {
  active?: boolean;
}

interface PanelBlockProps {
  active?: boolean;
}

declare const Panel: BulmaComponent<PanelProps, 'nav'> & {
  Header: BulmaComponent<{}, 'div'>;
  Tabs: BulmaComponent<{}, 'div'> & {
    Tab: BulmaComponent<PanelTabProps, 'a'>;
  };
  Block: BulmaComponent<PanelBlockProps, 'div'>;
  Icon: BulmaComponent<{}, 'span'>;
};

export default Panel;
