import { createSlice } from "@reduxjs/toolkit";
import logger from "../../utils/logger";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    sideBarKey: "0"
  },
  reducers: {
    sideBarAction: (state, action) => {
      return (state = {
        ...state,
        sideBarKey: action.payload
      });
    }
  }
});

export const { sideBarAction } = authSlice.actions;

export const updateSidebarKey = (data) => async (dispatch) => {
  try {
    dispatch(sideBarAction(data));
  } catch (error) {
    logger(error);
  }
};

export const getSidebarKey = (state) => state.auth.sideBarKey;

export default authSlice.reducer;
