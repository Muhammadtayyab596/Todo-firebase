import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser: (state) => {
            localStorage.removeItem("ACCESS_TOKEN");
            state.user = null;
            state.isAuthenticate = false;
            state.loading = false;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            console.log(action , "aaaaaa")
            // state.isAuthenticate = true;
            // state.loading = false;
            // state.error = null;
        },
    },
});

export const { logoutUser , loginSuccess } = authSlice.actions;

export default authSlice.reducer;