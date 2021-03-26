import { BulmaComponent } from '..';
import { Size } from '../../modifiers';

interface TabsProps {
  align?: 'centered' | 'right';
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
