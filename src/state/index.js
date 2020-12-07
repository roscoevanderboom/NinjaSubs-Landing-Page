/* eslint-disable react/prop-types */
// Services
import React, { createContext } from "react";
import { useSnackbar } from "notistack";

// Components
import { createFeedback } from "../components/Feedback/index";

const GlobalState = createContext();
export const GlobalStatePovider = props => {
  // *******************************************************
  // ********************* State ***************************
  // *******************************************************

  // Methods for user feedback
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const feedback = (variant, message) => {
    createFeedback(variant, message, enqueueSnackbar, closeSnackbar);
  };

  // Create provider
  return (
    <GlobalState.Provider value={{ feedback }}>
      {props.children}
    </GlobalState.Provider>
  );
};
export default GlobalState;
