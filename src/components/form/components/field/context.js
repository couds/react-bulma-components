import React, { useContext } from 'react';

export const FieldContext = React.createContext({
  size: undefined,
});

const useFieldContext = () => useContext(FieldContext);

export default useFieldContext;
