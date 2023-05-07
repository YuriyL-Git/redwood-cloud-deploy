import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthProviderTypes } from '../../../../shared/types';

const initialState = {
  currProviderType: AuthProviderTypes.DbAuth,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeProviderType(state, action: PayloadAction<AuthProviderTypes>) {
      state.currProviderType = action.payload;
    },
  },
});

export const { changeProviderType } = authSlice.actions;

export default authSlice.reducer;
