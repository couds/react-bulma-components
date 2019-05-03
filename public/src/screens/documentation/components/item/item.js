import React from 'react';
import PropTypes from 'prop-types';
import { Columns, Heading } from 'react-bulma-components/lib';
import Icon from 'components/icon';
import Link from 'components/link';

import './item.scss';

const Item = ({ icon, link, title, description }) => (
  <Columns className="documentation-item" renderAs={Link} to={link}>
    <Columns.Column narrow className="is-vertically-centered">
      <Icon icon={icon} />
    </Columns.Column>
    <Columns.Column >
      <Heading size={3}>
        {title}
      </Heading>
      <Heading subtitle size={3}>
        {description}
      </Heading>
    </Columns.Column>
  </Columns>
);

export default Item;
