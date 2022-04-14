import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    access: null,
    refresh: null,
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokens(
            state,
            action,
        ) {
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
        },
        setUser(
            state,
            action,
        ) {
            state.user = action.payload;
        },
        clearTokens(
            state
        ) {
            state.access = null;
            state.refresh = null;
            state.user = null;
        }
    }
});

export default authSlice;