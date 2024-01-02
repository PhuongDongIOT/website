import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  getArticleImgUrl, getArticleTags, getFormattedDate, getTagLink,
} from '~helpers/pages/article.helper';
import { Article, UserSliceType } from '~types/article-types';
import { ReduxState } from '~redux/store';

interface Props {
  article: Article;
}

const ArticleDetail = ({ article }:Props) => {
  const router = useRouter();

  const reduxUserData:UserSliceType = useSelector((reduxState: ReduxState) => reduxState.user);

  const [expanded, setExpanded] = useState(true);

  const isFavorite = reduxUserData.favoriteItems.some((item: any) => item.id === article.id);

  const allTags = getArticleTags(article);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    JSON.stringify(article)
  );
};

export default ArticleDetail;