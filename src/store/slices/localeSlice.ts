import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LocaleState {
  locale: "en";
}

const initialState: LocaleState = {
  locale: "en",
};

export const localeSlice = createSlice({
  name: "localeSlice",
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<LocaleState>) => {
      state.locale = action.payload.locale;
    },
  },
});

export const { setLocale } = localeSlice.actions;

export default localeSlice.reducer;
