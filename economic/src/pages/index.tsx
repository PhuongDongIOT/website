import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { edenTreaty } from '@elysiajs/eden'
import { useSession, signIn, signOut } from "next-auth/react"

import { App } from '../../../ba-economic/src/index'
import { logger } from '~utils/logger.utils'

import { HeroComponent } from '~layout/Home';
 
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
  const log = console.log;
  // console.log(data)
  logger.info(data);
  const prop : Prop = {
    props: {
      repo: data
    }
  }
  return prop;
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
      <ComponentLogin />
    )
  } else {
    return pong
  }
}

function ComponentLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
