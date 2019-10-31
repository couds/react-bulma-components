import React from 'react';
import Table from 'react-bulma-components/lib/components/table';

import ContainerProps from './props';

const fields = Object.keys(ContainerProps[0]);

const PropsTable = () => {
  const renderHeaders = () => fields.map(field => <th key={field}>{field}</th>);

  const renderItems = () =>
    ContainerProps.map(props => (
      <tr key={props.name}>
        <th>
          <code>{props.name}</code>
        </th>
        <th>
          <code>{props.type}</code>
        </th>
        <th>
          <code>{props.required}</code>
        </th>
        <th>
          <code>{props.default}</code>
        </th>
      </tr>
    ));

  return (
    <Table>
      <thead>{renderHeaders()}</thead>
      <tbody>{renderItems()}</tbody>
    </Table>
  );
};

export default PropsTable;
