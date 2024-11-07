import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: sessionStorage.getItem("language")
        ? sessionStorage.getItem("language")
        : "uz",
};

const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        languageChange: (state, { payload }) => {
            sessionStorage.setItem("language", payload);
            state.language = payload;
        },
    },
});

export const { languageChange } = languageSlice.actions;

export default languageSlice.reducer;
