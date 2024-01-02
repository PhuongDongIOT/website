'use client';

import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { reactQueryFn } from '~apis/form.api';
import { mainConfig } from '~configs/main.config';

import { logger } from '~utils/logger.utils';


export async function http<T>(): Promise<T> {
  const response = await fetch('https://api.github.com/repos/vercel/next.js')

  const dataResponse: T | any = await response.json()
  if (!response.ok || !dataResponse) {
    throw new Error("Page Not Found 404")
  }
  return dataResponse
}
 
export const getStaticProps = (async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['forms'],
    queryFn: reactQueryFn.getAvatar,
  }
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: mainConfig.detailPageRefreshInterval,
  };
}) satisfies GetStaticProps<{
  dehydratedState: any,
}>

function Index({
  dehydratedState,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const typeResponse = typeof dehydratedState  
  if(typeResponse === 'string'|| true) {
    return (
      'hihi'
    )
  } else {
    return typeResponse
  }
}


export default Index;
