import { BulmaComponent } from 'src/components';
import { Color } from 'src/modifiers';

interface NavbarProps {
  transparent?: boolean;
  fixed?: 'top' | 'bottom';
  color?: Color;
  active?: boolean;
}

interface NavbarBurgerProps {
  onClick?: () => void;
}

interface NavbarItemProps {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
  arrowless?: boolean;
}

interface NavbarDropdownProps {
  boxed?: boolean;
  right?: boolean;
}

interface NavbarLinkProps {
  arrowless?: boolean;
}

interface NavbarContainerProps {
  position?: 'start' | 'end';
}

export const Navbar: BulmaComponent<NavbarProps, 'nav'> & {
  Brand: BulmaComponent<{}, 'div'>;
  Burger: BulmaComponent<NavbarBurgerProps, 'div'>;
  Menu: BulmaComponent<{}, 'div'>;
  Item: BulmaComponent<NavbarItemProps, 'a'>;
  Dropdown: BulmaComponent<NavbarDropdownProps, 'span'>;
  Link: BulmaComponent<NavbarLinkProps, 'span'>;
  Divider: BulmaComponent<{}, 'div'>;
  Container: BulmaComponent<NavbarContainerProps, 'div'>;
};
