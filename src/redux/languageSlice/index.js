import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "uz",
};

const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        languageChange: (state, { payload }) => {
            localStorage.setItem("language", payload);
            state.language = payload;
        },
    },
});

export const { languageChange } = languageSlice.actions;

export default languageSlice.reducer;
