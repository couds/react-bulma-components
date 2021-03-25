import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutRenderAs } from '..';

interface MenuListComponentProps {
  title?: React.ReactNode;
}

interface MenuListItemProps {
  active?: boolean;
  children?: string[] | React.ReactElement[];
}

declare const Menu: BulmaComponent<{}, 'aside'> & {
  List: BulmaComponentWithoutRenderAs<MenuListComponentProps, 'ul'> & {
    Item: BulmaComponent<MenuListItemProps, 'a'>;
  };
};

export default Menu;
