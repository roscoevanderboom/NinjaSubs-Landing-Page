/* eslint-disable react/prop-types */
// Services
import React, { createContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

// Reducers & initial state
import reducers from "../reducers";
import initState from "./initialState";

// Components
import { createFeedback } from "../components/Feedback/index";

const GlobalState = createContext();
export const GlobalStatePovider = props => {
  // *******************************************************
  // ********************* State ***************************
  // *******************************************************

  // Router history
  const hist = useHistory();
  const [appState, dispatch] = useReducer(reducers, initState);

  // Methods for user feedback
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const feedback = (variant, message) => {
    createFeedback(variant, message, enqueueSnackbar, closeSnackbar, hist);
  };

  // Create provider
  return (
    <GlobalState.Provider
      value={{
        hist,
        appState,
        dispatch,
        feedback
      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};
export default GlobalState;
