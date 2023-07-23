import { createSlice } from '@reduxjs/toolkit';
import HomeIcon from "../../../assets/icons/homeIcon.svg"
import type { PayloadAction } from '@reduxjs/toolkit';

interface DirectionObject {
  name: string,
  imgSrc?: string,
  navigateDirection: string
}

interface DirectionBarState {
  directionArray: DirectionObject[];
}

const initialState: DirectionBarState = {
  directionArray: [{
    name: "Home",
    imgSrc: HomeIcon,
    navigateDirection: "/"
  }],
};

export const directionbarSlice = createSlice({
    name: "directionbar",
    initialState,
    reducers: {
        updateDirection(state, action) {
            state.directionArray.push(action.payload);
        },
        clearDirection(state) {
          state.directionArray = initialState.directionArray;
        }
    },
})

export const { updateDirection, clearDirection } = directionbarSlice.actions;
export default directionbarSlice.reducer;