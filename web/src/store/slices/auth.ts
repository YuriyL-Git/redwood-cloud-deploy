import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthProps } from 'types/types';

import { AuthTypes } from '../../../../shared/types';

interface InitialState {
  authType: AuthTypes;
  authProps: AuthProps;
}

const initialState: InitialState = {
  authType: AuthTypes.Auth0,
  // @ts-ignore
  authProps: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthType(state, action: PayloadAction<AuthTypes>) {
      state.authType = action.payload;
    },
    setAuthProps(state, action: PayloadAction<AuthProps>) {
      state.authProps = action.payload;
    },
  },
});

export const { setAuthType, setAuthProps } = authSlice.actions;

export default authSlice.reducer;
