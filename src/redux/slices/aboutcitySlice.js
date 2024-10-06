import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  selectedCityId: null,
};

const aboutcitySlice = createSlice({
  name: 'aboutcity',
  initialState,
  reducers: {
    openaboutcity: (state, action) => {
      state.isOpen = true;
      state.selectedCityId = action.payload;
    },
    closeaboutcity: (state) => {
      state.isOpen = false;
      state.selectedCityId = null;
    },
  },
});

export const { openaboutcity, closeaboutcity } = aboutcitySlice.actions;
export default aboutcitySlice.reducer;
