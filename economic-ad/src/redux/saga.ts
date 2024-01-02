import { call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import articleSlice from './features/articleSlice';
import formSlice from './features/formSlice';
import * as articleApi from '~apis/article.apis';
import * as userApi from '~apis/user.api';
import * as formApi from '~apis/form.api';

import {
  Article, ArticleFilterParams, AvatarResponse, UploadFileParams, UploadFormParams
} from '~types/article-types';
import userSlice from './features/userSlice';

export function* fetchArticles(action: PayloadAction<ArticleFilterParams>) {
  try {
    const response:Article[] = yield call(articleApi.getArticles, action.payload);

    const newData = {
      params: action.payload,
      data  : response,
    };

    // const response:Article[] = yield call(() => articleApi.getArticles(action.payload));

    yield put(articleSlice.actions.getArticlesSuccess(newData));
  } catch (e: any) {
    console.log('🚀 ~ file: saga.ts ~ line 19 ~ function*fetchArticles ~ e', e);

    yield put(articleSlice.actions.getArticlesFailure(e.message));
  }
}

export function* fetchArticleDetail(action: PayloadAction<{ id: number }>) {
  try {
    const response:Article = yield call(() => articleApi.getArticleDetail(action.payload));

    yield put(articleSlice.actions.getArticleDetailSuccess(response));
  } catch (e: any) {
    // yield put(articleSlice.actions.getArticleDetailFailure(e.message));
  }
}

export function* uploadAvatar(action: PayloadAction<UploadFileParams>) {
  try {
    const response:AvatarResponse = yield call(userApi.uploadAvatar, action.payload);

    console.log('🚀 ~ file: saga.ts ~ line 40 ~ function*uploadAvatar ~ response', response);

    yield put(userSlice.actions.uploadAvatarSuccess(response));
  } catch (e: any) {
    console.log('🚀 ~ file: saga.ts ~ line 40 ~ function*uploadAvatar ~ error', e);

    // yield put(articleSlice.actions.getArticleDetailFailure(e.message));
  }
}

export function* uploadForm(action: PayloadAction<UploadFormParams>) {
  try {
    const response:UploadFormParams = yield call(formApi.uploadForm, action.payload);

    console.log('🚀 ~ file: saga.ts ~ line 40 ~ function*uploadAvatar ~ response', response);
    return response
    // yield put(userSlice.actions.uploadAvatarSuccess(response));
  } catch (e: any) {
    console.log('🚀 ~ file: saga.ts ~ line 40 ~ function*uploadAvatar ~ error', e);

    // yield put(articleSlice.actions.getArticleDetailFailure(e.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(articleSlice.actions.getArticlesRequest, fetchArticles);
  yield takeLatest(articleSlice.actions.getArticleDetailRequest, fetchArticleDetail);

  // uploadAvatarRequest
  yield takeLatest(userSlice.actions.uploadAvatarRequest, uploadAvatar);

  
  yield takeLatest(formSlice.actions.uploadFromRequest, uploadForm);

  // yield takeLatest(userSlice.actions.visit, fetchNumberSaga)
}