'use client'

import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { edenTreaty } from '@elysiajs/eden';

import { App } from '../../../ba-economic/src/index';
import { logger } from '~utils/logger.utils';

import HomeComponent from '~/views/homes/main';

 
type Repo = {
  name: string
  stargazers_count: number
}

type Prop = {
  props: {
    repo?: (Repo | any),
    pong?: String
  }
}

type Pong = String

export async function connectEdenTreaty<T>(): Promise<T> {
  const app: any = edenTreaty<App & any>('http://localhost:8080')
  const { data: pong, error } = await app['index'].get()

  if (!pong || error) {
    throw new Error("Page Not Found 404")
  }
  return pong
}

export async function http<T>(): Promise<T> {
  const response = await fetch('https://api.github.com/repos/vercel/next.js')

  const dataResponse: T | any = await response.json()
  if (!response.ok || !dataResponse) {
    throw new Error("Page Not Found 404")
  }
  return dataResponse
}
 
export const getStaticProps = (async (context) => {
  const data: Repo = await http<Repo>()
  logger.info(data);
  return {
    props: {
      pong: 'Hello word',
      repo: data,
    }
  }
}) satisfies GetStaticProps<{
  pong: Pong,
  repo: Repo,
}>
 
export default function Index({
  pong,
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const typeResponse = typeof repo  
  if(typeResponse === 'string'|| true) {
    return (
      <HomeComponent />
    )
  } else {
    return pong
  }
}
