import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => ({
      ...state,
      ...action?.payload,
    }),
  },
});

export const {setProfile} = profileSlice.actions;
export default profileSlice.reducer;
