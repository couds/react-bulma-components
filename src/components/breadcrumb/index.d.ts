import { BulmaComponent } from '..';
import { Size } from '../../modifiers';

interface BreadcrumbProps {
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Size;
  align?: 'right' | 'center';
}

interface BreadcrumbItemProps {
  active?: boolean;
}

export const Breadcrumb: BulmaComponent<BreadcrumbProps, 'nav'> & {
  Item: BulmaComponent<BreadcrumbItemProps, 'li'>;
};
