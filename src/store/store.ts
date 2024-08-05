import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  selectedWeek: 0,
};

const SET_SELECTED_WEEK = "SET_SELECTED_WEEK";

export const setSelectedWeek = (week: number) => ({
  type: SET_SELECTED_WEEK,
  payload: week,
});

const calendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_WEEK:
      return {
        ...state,
        selectedWeek: action.payload,
      };
    default:
      return state;
  }
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      calendar: calendarReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
