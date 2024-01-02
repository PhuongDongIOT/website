import axios from 'axios';
import { mainConfig } from '~configs/main.config';
import { ITEMS_PER_PAGE } from '../constants/article-const';
import { Article, ArticleFilterParams, ArticleDetailParams } from '~types/article-types';

interface ReactQueryFnProps<T> {
  queryKey: [string, T];
}

export const getArticles = async ({ tag = 'react', page = 1 }:ArticleFilterParams):Promise<Article[]> => {
  const apiEndpoint = `${mainConfig.siteUri}/savedData/article-1171037.json`;

  try {
    const response = await axios.get(apiEndpoint);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: article-api.ts ~ line 46 ~ getArticles ~ apiEndpoint', apiEndpoint, error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        // Do something for timeout ...
      }
    }
  }
  return [];
};

export const getArticleDetail = async ({ id }:ArticleDetailParams):Promise<Article | null> => {
  const apiEndpoint = `${mainConfig.siteUri}/savedData/article-1171037.json`;
  try {
    console.log(apiEndpoint)
    const response = await axios.get(apiEndpoint);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: article-api.ts ~ line 27 ~ getArticleDetail ~ apiEndpoint', apiEndpoint, error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        // Do something for timeout ...
      }
    }
  }

  return null;
};

export const reactQueryFn = {
  getArticles: async (params:ReactQueryFnProps<ArticleFilterParams>)
  :Promise<Article[]> => getArticles(params.queryKey[1]),

  getArticleDetail: async (params:ReactQueryFnProps<ArticleDetailParams>)
  :Promise<Article | null> => getArticleDetail(params.queryKey[1]),
};