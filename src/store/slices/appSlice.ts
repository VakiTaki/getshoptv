import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface IAppStore {
  phone: string;
  isShowPromo: boolean;
  isAgree: boolean;
  isSubmit: boolean;
  activeIndex: number;
  isValid: boolean;
  isStartPlay: boolean;
  isPhoneValid: boolean;
}

const initialState: IAppStore = {
  phone: "",
  isShowPromo: false,
  isAgree: false,
  isSubmit: false,
  activeIndex: -1,
  isValid: false,
  isStartPlay: false,
  isPhoneValid: true,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    phoneChanged(state, action: PayloadAction<string>) {
      state.isPhoneValid = initialState.isPhoneValid;
      if (action.payload === "backspace") {
        if (state.phone) state.phone = state.phone.slice(0, -1);
      } else {
        if (state.phone.length < 10) state.phone = state.phone + action.payload;
      }
    },
    changedIsShowPromo(state, action: PayloadAction<boolean>) {
      state.isShowPromo = action.payload;
    },
    changeIsAgree(state) {
      state.isAgree = !state.isAgree;
    },
    changeIsSubmit(state) {
      state.isSubmit = true;
    },
    changedActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    clearActiveIndex(state) {
      state.activeIndex = -1;
    },
    changedIsValid(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    changedIsStartPlay(state) {
      state.isStartPlay = true;
    },
    changedIsPhoneValid(state, action: PayloadAction<boolean>) {
      state.isPhoneValid = action.payload;
    },
  },
});

export const {
  phoneChanged,
  changedIsShowPromo,
  changeIsAgree,
  changeIsSubmit,
  changedActiveIndex,
  clearActiveIndex,
  changedIsValid,
  changedIsStartPlay,
  changedIsPhoneValid,
} = appSlice.actions;

//Selectors
export const getPhone = () => (state: RootState) => state.app.phone;
export const getIsShowPromo = () => (state: RootState) => state.app.isShowPromo;
export const getIsAgree = () => (state: RootState) => state.app.isAgree;
export const getIsSubmit = () => (state: RootState) => state.app.isSubmit;
export const getActiveIndex = () => (state: RootState) => state.app.activeIndex;
export const getIsValid = () => (state: RootState) => state.app.isValid;
export const getIsStartPlay = () => (state: RootState) => state.app.isStartPlay;
export const getIsPhoneValid = () => (state: RootState) =>
  state.app.isPhoneValid;

export default appSlice.reducer;
