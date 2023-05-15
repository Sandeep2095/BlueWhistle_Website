import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";

import {
  GET_DAYPLAN,
  ADD_DAYPLAN,
  ADD_EOD,
  GET_EOD,
  DAYPLAN_ERROR,
  EOD_ERROR,
  GET_USERS,
  LOAD_DASH_PROFILE,
} from "../types";


const UserState = (props) => {
  const initialState = {
    dayplans: [],
    eods: [],
    users: [],
    dashprofile: null,
    dashprofileDayPlans: [],
    dashprofileEod:[],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        dayplans: state.dayplans,
        eods: state.eods,
        users: state.users,
        dashprofile: state.dashprofile,
        dashprofileDayPlans: state.dashprofileDayPlans,
        dashprofileEod: state.dashprofileEod,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
