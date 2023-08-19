import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store/storeProvider';


export const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        navToggleState: false,
    },
    reducers: {
        toggleNavBar(state) {
            state.navToggleState = !state.navToggleState;
        }
    },
})

export const { toggleNavBar } = navbarSlice.actions;
export default navbarSlice.reducer;