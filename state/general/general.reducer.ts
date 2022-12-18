import { Espa } from "../../types/shared/Lang";
import { Langs } from "./types";

export type GeneralStateType = {
  scrollPercentage: number;
  loading: boolean;
  lan: Langs;
  language: Espa | null;
};

type Actions = { type: "SET_SCROLL"; payload: number } | { type: "SET_LANG"; payload: any };

const generalReducer = (
  state: GeneralStateType,
  action: Actions
): GeneralStateType => {
  const { payload } = action;

  switch (action.type) {
    case "SET_SCROLL":
      return {
        ...state,
        scrollPercentage: payload,
      };
    case "SET_LANG":
      localStorage.setItem("ISALAN", payload.lan)
      return {
        ...state,
        language: payload.data,
        lan: payload.lan
      };
    default:
      return state;
  }
};
export default generalReducer;
