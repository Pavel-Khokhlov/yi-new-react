import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    currentPath: '',
    isPopupOpen: false,
    isMenuPopupOpen: false,
    isUnsubscribePopupOpen: false,
  },
  reducers: {
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
    openMenuPopup(state, action) {
      state.isPopupOpen = true;
      state.isMenuPopupOpen = true;
    },
    openUnsubscribePopup(state, action) {
      state.isPopupOpen = true;
      state.isUnsubscribePopupOpen = true;
    },
    closeAllPopups(state, action) {
      state.isMenuPopupOpen = false;
      state.isUnsubscribePopupOpen = false;
      state.isPopupOpen = false;
    },
  },
});

export const {
  setCurrentPath,
  openMenuPopup,
  openUnsubscribePopup,
  closeAllPopups,
} = appSlice.actions;

export default appSlice.reducer;
