import { BulmaComponent } from 'src/components';
import { Size } from 'src/modifiers';

interface TabsProps {
  align?: 'centered' | 'right';
  size?: Size;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
  fullwidth?: boolean;
}

interface TabProps {
  active?: boolean;
}

export const Tabs: BulmaComponent<TabsProps, 'div'> & {
  Tab: BulmaComponent<TabProps, 'a'>;
};
