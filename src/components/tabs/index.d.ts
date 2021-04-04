import { BulmaComponent } from '..';
import { Size } from '..';

interface TabsProps {
  align?: 'center' | 'right';
  size?: Size;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
  fullwidth?: boolean;
}

interface TabProps {
  active?: boolean;
}

declare const Tabs: BulmaComponent<TabsProps, 'div'> & {
  Tab: BulmaComponent<TabProps, 'a'>;
};

export default Tabs;
