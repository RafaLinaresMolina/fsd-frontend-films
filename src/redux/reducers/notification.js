const initialState = {
  showErrorNotification: false,
  showWarningNotification: false,
  showSuccessNotification: false,
  showInfoNotification: false,
  errorNotification: {},
  warningNotification: {},
  successNotification: {},
  infoNotification: {},
};
const notification = (state = initialState, action) => {
  const actions = {
    WARNING_NOTIFICATION: {
      ...state,
      showWarningNotification: action.payload?.show,
      warningNotification: action.payload?.notification,
    },
    SUCCSESS_NOTIFICATION: {
      ...state,
      showSuccessNotification: action.payload?.show,
      successNotification: action.payload?.notification,
    },
    ERROR_NOTIFICATION: {
      ...state,
      showErrorNotification: action.payload?.show,
      errorNotification: action.payload?.notification,
    },
    INFO_NOTIFICATION: {
      ...state,
      showInfoNotification: action.payload?.show,
      infoNotification: action.payload?.notification,
    },
    CLEAR_NOTIFICATION_WARNING: {
      ...state,
      showWarningNotification: action.payload?.show,
      warningNotification: action.payload?.notification,
    },
    CLEAR_NOTIFICATION_ERROR: {
      ...state,
      showErrorNotification: action.payload?.show,
      errorNotification: action.payload?.notification,
    },
    CLEAR_NOTIFICATION_SUCCESS: {
      ...state,
      showSuccessNotification: action.payload?.show,
      successNotification: action.payload?.notification,
    },
    CLEAR_NOTIFICATION_INFO: {
      ...state,
      showInfoNotification: action.payload?.show,
      infoNotification: action.payload?.notification,
    },
  };
  return Object.keys(actions).includes(action.type)
    ? actions[action.type]
    : state;
};

export default notification;
