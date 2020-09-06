import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutRenderAs } from '../../index';

interface MenuListComponentProps {
  title?: React.ReactNode;
}

interface MenuListItemProps {
  active?: boolean;
  children?: string[] | React.ReactElement[];
}

export const Menu: BulmaComponent<{}, 'aside'> & {
  List: BulmaComponentWithoutRenderAs<MenuListComponentProps, 'ul'> & {
    Item: BulmaComponent<MenuListItemProps, 'a'>;
  };
};
