'use client';

import type {
  GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage,
} from 'next';
import React from 'react';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { END } from 'redux-saga';
import { useDispatch } from 'react-redux';
import { useEffectOnce } from 'react-use';
import { reactQueryFn } from '~apis/article.apis';
import MainLayout from '~layouts/MainLayout';
import articleSlice from '~redux/features/articleSlice';
import { ReduxState, reduxWrapper } from '~redux/store';
import { getRouterParam, getIdFromSlug } from '~utils/histoty.utils';
import { mainConfig } from '~configs/main.config';
  import ArticleDetail from '~views/article/detail';
import userSlice from '~redux/features/userSlice';
import HeadMeta from '~layouts/HeadMeta';
import { Article } from '~types/article-types';

const fs = require('fs');

const ArticleDetails: NextPage = ({
  serverRedux,
  articleId,
}
  : InferGetStaticPropsType<typeof getStaticProps>) => {
  const reduxDispatch = useDispatch();

  const { data: reactQueryData } = useQuery({
    queryKey: ['articles', { id: articleId }],
    queryFn: reactQueryFn.getArticleDetail,
    enabled: !mainConfig.isReduxForStaticPropsEnabled && articleId > 0 }
  );

  const articleDetail = mainConfig.isReduxForStaticPropsEnabled
    ? serverRedux?.article.detail
    : reactQueryData;

  useEffectOnce(
    () => {
      if (mainConfig.isStaticPageDebugDisabled
        && mainConfig.isClientSide && articleDetail?.id > 0) {
        reduxDispatch(userSlice.actions.recentItemRequest(articleDetail));
      }
    },
  );

  return (
    <MainLayout>
      <HeadMeta title={articleDetail?.title} article={articleDetail} />
      {articleDetail && <ArticleDetail article={articleDetail} />}
    </MainLayout>
  );
};

export const getStaticPropsFromReactQuery: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const articleId = getIdFromSlug(getRouterParam(params?.slug)) || 0;

  await queryClient.prefetchQuery({    
    queryKey: ['articles', { id: articleId }],
    queryFn: reactQueryFn.getArticleDetail,
  }
  );

  return {
    props: {
      articleId,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: mainConfig.detailPageRefreshInterval,
  };
};

export const getStaticPropsFromRedux: GetStaticProps = reduxWrapper.getStaticProps(
  (store) => async ({ params }) => {
    const articleId = getIdFromSlug(getRouterParam(params?.slug)) || 0;

    store.dispatch(articleSlice.actions.getArticleDetailRequest({ id: articleId }));
    store.dispatch(END);
    if(store.sagaTask) {
      await store.sagaTask.toPromise();
    }

    return {
      props: {
        articleId,
        serverRedux: store.getState() as ReduxState,
      },
      revalidate: mainConfig.detailPageRefreshInterval,
      notFound: articleId < 1,
    };
  },
);

export const getStaticPaths: GetStaticPaths = async () => {
  const files: string[] = fs.readdirSync(mainConfig.dataFilePath);
  const allSlugs = files.map((file) => {
    if (!file.includes('tag-')) {
      return [];
    }
    const articleData = JSON.parse(fs.readFileSync(`${mainConfig.dataFilePath}/${file}`, 'utf8'));
    if (Array.isArray(articleData) && articleData.length && 'id' in articleData[0] && 'slug' in articleData[0] && articleData[0].cover_image) {
      return articleData.map((article: Article) => `${article.slug}-${article.id}`);
    }

    return [];
  }).flat();

  const paths = allSlugs.slice(0, 500).map((slug) => ({
    params: {
      slug,
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = mainConfig.isReduxForStaticPropsEnabled
  ? getStaticPropsFromRedux
  : getStaticPropsFromReactQuery;

export default ArticleDetails;

// "use client";
// import { useSelector, useDispatch } from "react-redux";
// import { addPost, deletePost } from "~redux/slices/postsSlice";
// import styles from "~styles/page.module.css";
// import { useState } from "react";

// export default function Posts() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const posts = useSelector((state: any) => state.posts);
//   const dispatch = useDispatch();

//   const handleAddPost = (e: any) => {
//     e.preventDefault();

//     if(!title && !description) return;

//     const newPost = {
//       id: Date.now(),
//       title,
//       description,
//     };

//     dispatch(addPost(newPost));

//     // Reset form fields
//     setTitle('');
//     setDescription('');
//   };

//   const handleRemovePost = (postId: any) => {
//     dispatch(deletePost(postId));
//   };

//   return (
//     <div className={styles.container}>
//       <form className={styles.form} onSubmit={handleAddPost}>
//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Title"
//           value={title}
//           onChange={(e: any) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           className={styles.input}
//           onChange={(e: any) => setDescription(e.target.value)}
//         ></textarea>
//         <button className={styles.button} onClick={handleAddPost}>Add New Post</button>
//       </form>
//       <h1 className={styles.heading}>Posts</h1>
//       {posts ? (
//         posts.map((post: any) => (
//           <div key={post.id} className={styles.post}>
//             <h3 className={styles.title}>{post.title}</h3>
//             <p className={styles.description}>{post.description}</p>
//             <button
//               className={styles.deleteButton}
//               onClick={() => handleRemovePost(post.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       ) : (
//         <p>No posts found.</p>
//       )}
//     </div>
//   );
// }
