import { BulmaComponent } from '..';
import { Color } from '..';

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

declare const Navbar: BulmaComponent<NavbarProps, 'nav'> & {
  Brand: BulmaComponent<{}, 'div'>;
  Burger: BulmaComponent<NavbarBurgerProps, 'div'>;
  Menu: BulmaComponent<{}, 'div'>;
  Item: BulmaComponent<NavbarItemProps, 'a'>;
  Dropdown: BulmaComponent<NavbarDropdownProps, 'span'>;
  Link: BulmaComponent<NavbarLinkProps, 'span'>;
  Divider: BulmaComponent<{}, 'div'>;
  Container: BulmaComponent<NavbarContainerProps, 'div'>;
};

export default Navbar;
