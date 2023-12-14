import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  FormSliceType, UploadFormParams,
} from '~types/article-types';

const initialState: FormSliceType = {
  status       : '',
};

const formSlice = createSlice({
  name    : 'form',
  initialState,
  reducers: {
    uploadFromRequest: (state, action: PayloadAction<UploadFormParams>) => {
      state.status = 'loading';
      console.log('🚀 ~ file: formSlice.ts ~ line 57 ~ uploadAvatarRequest', action, state);
    },
  },
});

export default formSlice;