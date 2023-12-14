import { UploadFormParams, UploadFormUserParams } from '~types/article-types';
import { apiComon } from '~helpers/https/apis.common';

interface ReactQueryFnProps<T> {
  queryKey: [string, T];
}

const uploadForm = async ({ name, email }:UploadFormParams):Promise<UploadFormParams> => {
    const response: any = await apiComon.postCommon<UploadFormUserParams>('/user', { user: { name, email } })
    return response;
};

const reactQueryFn = {
  uploadAvatar: async (params:ReactQueryFnProps<UploadFormParams>)
  :Promise<UploadFormParams> => uploadForm(params.queryKey[1]),
};

export { 
  uploadForm,
  reactQueryFn
}