import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

import 'bulma/css/bulma.min.css';

addDecorator(withPropsTable);

export const parameters = {
  layout: 'centered',
};
