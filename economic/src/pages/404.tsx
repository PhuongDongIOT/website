import dynamic from 'next/dynamic'

const Dynamic404 = dynamic(() => import('~components/error/Index404'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
})

const Index = () => <Dynamic404 />

export default Index;