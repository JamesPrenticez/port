// RefContext.js
import React, { createContext, useContext } from 'react';

const RefContext = createContext(null);

const useRefContext = () => {
  const context = useContext(RefContext);

  if (context === undefined) {
    throw new Error("RefContext must be used within a RefProvider");
  }

  return context;
};

const RefProvider = ({ children, value }) => {
  return (
    <RefContext.Provider value={value}>
      {children}
    </RefContext.Provider>
  );
};

export { useRefContext, RefProvider };
