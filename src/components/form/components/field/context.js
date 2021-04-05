import React, { useContext } from 'react';

export const FieldContext = React.createContext({
  size: undefined,
});

const useFieldContext = () => {
  return useContext(FieldContext);
};

export default useFieldContext;
