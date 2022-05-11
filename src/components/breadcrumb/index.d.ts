import { BulmaComponent } from '..';
import { Size } from '..';

interface BreadcrumbProps {
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Size;
  align?: 'right' | 'centered';
}

interface BreadcrumbItemProps {
  active?: boolean;
}

declare const Breadcrumb: BulmaComponent<BreadcrumbProps, 'nav'> & {
  Item: BulmaComponent<BreadcrumbItemProps, 'li'>;
};

export default Breadcrumb;
