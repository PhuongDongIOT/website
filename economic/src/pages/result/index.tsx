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
      <div className="relative z-10 p-4">
        <div className="space-y-4">
            <div className="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-2 ring-indigo-600">
              <div className="flex justify-between">
                  <div className="font-medium text-slate-900">Newsletter</div>
                  <svg className="h-5 w-5 flex-none" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z" fill="#4F46E5"></path>
                  </svg>
              </div>
              <div className="mt-1 text-slate-700">Last message sent an hour ago</div>
              <div className="mt-6 font-medium text-slate-900">621 users</div>
            </div>
            <div className="pointer-events-auto w-[21rem] rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 hover:bg-slate-50 ring-1 ring-slate-700/10">
              <div className="flex justify-between">
                  <div className="font-medium text-slate-900">Existing customers</div>
              </div>
              <div className="mt-1 text-slate-700">Last message sent an hour ago</div>
              <div className="mt-6 font-medium text-slate-900">1200 users</div>
            </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Index;