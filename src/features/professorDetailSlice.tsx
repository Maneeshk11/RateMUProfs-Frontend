import { createSlice } from '@reduxjs/toolkit';
import { Professor } from '../Constants/types';


export const professorDetailSlice = createSlice({
  name: "professorDetails",
  initialState: {
    profDetails: {} as Professor
  },
  reducers: {
    addProfDetails(state, action) {
      state.profDetails = action.payload;
    }
  },
})

export const { addProfDetails } = professorDetailSlice.actions;
export default professorDetailSlice.reducer;
