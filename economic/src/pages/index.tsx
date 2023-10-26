// import type { InferGetStaticPropsType, GetStaticProps } from 'next'
// import { edenTreaty } from '@elysiajs/eden'
// import { App } from '../../../ba-economic/src/index'
 
// type Repo = {
//   name: string
//   stargazers_count: number
// }
 
// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const app = edenTreaty<App>('http://localhost:8080')
//   const { data: pong, error } = await app.get()
//   const repo = await res.json()
//   return { props: { repo, pong } }
// }) satisfies GetStaticProps<{
//   repo: Repo,
//   pong: String,
// }>
 
// export default function Index({
//   repo,
//   pong,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return `${repo.stargazers_count} - ${pong}`
// }

const Index = ({ }) => {  
  return (
    <>
      <section className="">
          <p>No results found.</p>
          <p>No results found.</p>
          <p>No results found.</p>
          <p>No results found.</p>
          <p>No results found.</p>
      </section>
    </>
  );
};

export default Index;