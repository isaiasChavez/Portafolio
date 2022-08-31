import React, { useReducer } from "react";
import GeneralContext from "./general.context";
import generalReducer, { GeneralStateType } from "./general.reducer";

const GeneralState = ({ children }:{children:React.ReactNode}) => {

  const [state, dispatch] = useReducer(generalReducer, initialState());

  
  const setScrollPercentage = (percentage:number)=>{
    dispatch({
      type:'SET_SCROLL',
      payload:percentage
    })
  }
 
 

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        setScrollPercentage
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

const initialState = () => {
  let state: GeneralStateType = {
    scrollPercentage:0
  };  
  return state;
};

export default GeneralState;