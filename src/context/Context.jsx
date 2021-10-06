import React, { useContext, useReducer } from "react";

const Context = React.createContext();

export const FormProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const useFormStore = () => useContext(Context);
