import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import GeneralContext from "./general.context";
import generalReducer, { GeneralStateType } from "./general.reducer";
import { Langs } from "./types";

const GeneralState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(generalReducer, initialState());
  const [loading, setLoading] = useState(true);
  const setScrollPercentage = (percentage: number) => {
    dispatch({
      type: "SET_SCROLL",
      payload: percentage,
    });
  };
  useEffect(() => {
    const lan = localStorage.getItem("ISALAN");
    if (lan === Langs.ES) {
      getSpanish();
    } else {
      getEnglish();
    }
  }, []);

  const getSpanish = async (): Promise<void> => {
    try {
      setLoading(true);
      const datos = await axios.get("/api/es");
      setLoading(false);
      dispatch({
        type: "SET_LANG",
        payload: {
          data: datos.data,
          lan: Langs.ES,
        },
      });
    } catch (error) {
      setLoading(false);
    }
  };
  const getEnglish = async (): Promise<void> => {
    try {
      const datos = await axios.get("/api/lan");
      setLoading(false);
      dispatch({
        type: "SET_LANG",
        payload: {
          data: datos.data,
          lan: Langs.EN,
        },
      });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        loading,
        setScrollPercentage,
        getEnglish,
        getSpanish,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

const initialState = () => {
  let state: GeneralStateType = {
    scrollPercentage: 0,
    loading: true,
    lan: Langs.EN,
    language: null,
  };
  return state;
};

export default GeneralState;
