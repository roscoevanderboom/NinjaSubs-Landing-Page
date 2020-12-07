export const createFeedback = (variant, message, enqueueSnackbar) => {
  switch (variant) {
    case "success":
      enqueueSnackbar(message, {
        variant,
        autoHideDuration: 2000
      });
      break;
    case "error":
      enqueueSnackbar(message, {
        variant: "danger",
        autoHideDuration: 5000
      });
      break;
    default:
      enqueueSnackbar(message, {
        variant
      });
      break;
  }
};
