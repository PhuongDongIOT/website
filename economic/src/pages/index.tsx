import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { edenTreaty } from '@elysiajs/eden'
import { App } from '../../../ba-economic/src/index'
import chalk from 'chalk'
 
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

  const dataResponse: T | undefined = await response.json()
  if (!response.ok || !dataResponse) {
    throw new Error("Page Not Found 404")
  }
  return dataResponse
}
 
export const getStaticProps = (async (context) => {
  const data: Pong = await connectEdenTreaty<Pong>()
  const log = console.log;
  // console.log(data)
  const warning = chalk.hex('#FFA500'); // Orange color
  log(warning(data))
  const prop : Prop = {
    props: {
      pong: data
    }
  }
  return prop;
}) satisfies GetStaticProps<{
  pong: Pong,
}>
 
export default function Index({
  pong,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const typeResponse = typeof pong  
  if(typeResponse === 'string') {
    return (
      <>
        <div className="box-border h-32 w-32 p-2 border-4 md:box-content hover:box-content">
          <p>Excluding borders and padding</p>
        </div>
      </>
    )
  } else {
    return pong
  }
}

