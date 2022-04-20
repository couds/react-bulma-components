import React from 'react';

const DropdownContext = React.createContext({
  value: undefined,
  onSelect: undefined,
});

export default DropdownContext;
