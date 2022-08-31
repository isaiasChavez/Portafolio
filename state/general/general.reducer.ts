export type GeneralStateType = {
    scrollPercentage:number,
    
};

type Actions =
  | { type: "SET_SCROLL"; payload: number }

const generalReducer = (
  state: GeneralStateType,
  action: Actions
): GeneralStateType => {

  const { payload } = action;

  switch (action.type) {
    case 'SET_SCROLL':
        return {
            ...state,
            scrollPercentage:payload
        }

    default:
      return state;
  }
};
export default generalReducer;