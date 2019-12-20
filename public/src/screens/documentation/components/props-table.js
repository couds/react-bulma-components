import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bulma-components/lib/components/table';

const CommonProps = [
  {
    name: 'className',
    type: 'string',
    required: 'false',
    default: 'undefined',
  },
  {
    name: 'style',
    type: 'Object',
    required: 'false',
    default: 'undefined',
  },
];

const PropsTable = ({ componentProps }) => {
  console.log(componentProps);
  const fields = Object.keys(CommonProps[0]);

  const renderHeaders = () => fields.map(field => <th key={field}>{field}</th>);

  const renderItems = () =>
    [...CommonProps, ...componentProps].map(prop => (
      <tr key={prop.name}>
        <th>
          <code>{prop.name}</code>
        </th>
        <th>
          <code>{prop.type}</code>
        </th>
        <th>
          <code>{prop.required}</code>
        </th>
        <th>
          <code>{prop.default}</code>
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

PropsTable.propTypes = {
  componentProps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.string.isRequired,
      default: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PropsTable;
