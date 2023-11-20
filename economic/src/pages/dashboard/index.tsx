import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { edenTreaty } from '@elysiajs/eden'
import { App } from '../../../../ba-economic/src/index'
import { logger } from 'Utils/logger.utils'

import ErrorBoundary from 'Components/error/ErrorBoundary'
import ErrorDashboard from './error'

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
  const { data: pong, error } = await app.get()
  if (!pong || error) {
    throw new Error("Page Not Found 404")
  }
  return pong
}

export async function http<T>(): Promise<T> {
  const response = await fetch('https://api.github.com/repos/vercel/next.js')
  // const app: any = edenTreaty<App & any>('http://localhost:8080')
  const dataResponse: T | any = await response.json()
  if (!response.ok || !dataResponse) {
    throw new Error("Page Not Found 404")
  }
  // const { data: pong } = await app.get()
  // const repo: (T | any) = await res.json()
  // const response: Prop = { props: { repo, pong } }
  return dataResponse
}
 
export const getStaticProps = (async (context) => {
  const repo: Repo = await http<Repo>();  

  const prop : Prop = {
    props: {
      repo: repo
    }
  }
  return prop;
}) satisfies GetStaticProps<{
  repo: Repo
}>
 
export default function Index({
  repo,
  pong,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const typeResponse = typeof repo  
  if(typeResponse !== 'string') {
    return (
      <ErrorBoundary>
        <div className="box-border h-32 w-32 p-2 border-4 md:box-content hover:box-content">
          <p>Excluding borders and padding</p>
        </div>
      </ErrorBoundary>
    )
  } else {
    return (
      <div className="box-border h-32 w-32 p-2 border-4 md:box-content hover:box-content">
        <p>Excluding borders and padding</p>
      </div>
    )
  } 
}

