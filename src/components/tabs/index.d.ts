import { BulmaComponent, Size } from '../../index';

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
