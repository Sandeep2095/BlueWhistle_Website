import {
  ADD_DAYPLAN,
  GET_DAYPLAN,
  GET_EOD,
  ADD_EOD,
  GET_USERS,
  LOAD_DASH_PROFILE,
} from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_DAYPLAN:
      return {
        ...state,
        dayplans: [action.payload, ...state.dayplans],
        // loading: false,
      };
    case ADD_EOD:
      return {
        ...state,
        eods: [action.payload, ...state.eods],
        // loading: false,
      };
    case GET_DAYPLAN:
      return {
        ...state,
        dayplans: action.payload,
        // loading: false,
      };
    case GET_EOD:
      return {
        ...state,
        eods: action.payload,
        // loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        // loading: false,
      };
    case LOAD_DASH_PROFILE:
      return {
        ...state,
        dashprofile: action.payload.dashProfileUser,
        dashprofileDayPlans: action.payload.dashProfileDayPlans,
        dashprofileEod: action.payload.dashProfileEod,
      }
    default:
      return state;
  }
};

export default userReducer;
