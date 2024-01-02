'use client';


import type {
    GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage,
} from 'next';


import MainForm from '~views/forms/main';
import { mainConfig } from '~configs/main.config';
import { Api } from '~helpers/https/apis';

export const getStaticPaths: GetStaticPaths = async (context) => {
    console.log('hihi')
    return {
        paths: [
            {
                params: {
                    slug: 'hihi',
                },
            }, // See the "paths" section below
        ],
        fallback: "blocking", // false or "blocking"
    }
}


export const getStaticProps = (async (context) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
}) satisfies GetStaticProps<{
    repo: Repo
}>

export default function Page({
    repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {

    const handleOnSubmitIndex = async (data: any) => {
        const apis: Api = new Api();
        const response: any = apis.post('/api/user', { user: data })
        console.log(response)
    }

    return (
        <>
            <MainForm handleOnSubmitIndex={handleOnSubmitIndex} />
        </>
    )
}