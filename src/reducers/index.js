const reducer = (state, action) => {
  const { type, modal } = action;
  switch (type) {
    case "SET_LOCATION":
      return { ...state, location: action.data };
    case "SET_CONFIG":
      return { ...state, config: action.data };
    case "SET_LOADING":
      return { ...state, loading: action.data };
    case "SET_LOGGEDIN":
      return { ...state, loggedIn: action.data };
    case "SET_USER":
      return { ...state, user: action.data };
    case "SET_PROFILEDATA":
      return { ...state, profileData: action.data };
    case "SET_NOTICEBOARD":
      return { ...state, noticeboardQuery: action.data };
    case "SET_AVAILABLESUBS":
      return { ...state, availableSubs: action.data };
    case "SET_INBOX":
      return { ...state, inbox: action.data };
    case "SET_SEARCHLIST":
      return { ...state, searchList: action.data };
    case "SET_CURRENTLIST":
      return { ...state, currentList: action.data };
    case "SET_POST_TO_EDIT":
      return { ...state, post_to_edit: action.data };
    case "SET_SELECTED_CHAT":
      return { ...state, selectedChat: action.data };
    case "SET_MODAL":
      return {
        ...state,
        modals: {
          ...state.modals,
          [modal]: state.modals[modal] ? false : true
        }
      };
    default:
      break;
  }
};

export default reducer;
