import { createSlice } from '@reduxjs/toolkit';


export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favoriteProfs: [{}]
  },
  reducers: {
    addFavProf(state, action) {
      state.favoriteProfs.push(action.payload);
    },
    removeFavProf(state, action) {
      const newArr = state.favoriteProfs.filter(item => item !== action.payload);
      state.favoriteProfs = newArr;
    }
  },
})

export const { addFavProf, removeFavProf } = favouriteSlice.actions;
export default favouriteSlice.reducer;
