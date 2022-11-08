import { Espa } from "../../types/shared/Lang";

export type GeneralStateType = {
  scrollPercentage: number;
  loading: boolean;
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
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};
export default generalReducer;
