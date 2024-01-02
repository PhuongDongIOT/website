import dynamic from 'next/dynamic'

const Dynamic404 = dynamic(() => import('~views/pages404/main'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

const Index = () => <Dynamic404 />

export default Index;