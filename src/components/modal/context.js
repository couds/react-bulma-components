import React, { useContext } from 'react';

export const ModalContext = React.createContext({
  onClose: () => {},
});

const useModalContext = () => {
  return useContext(ModalContext);
};

export default useModalContext;
