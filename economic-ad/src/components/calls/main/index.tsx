import dynamic from 'next/dynamic';

const RoomComponent = dynamic(() => import('./components/RoomComponent'), { ssr: false, loading: () => 
    <h2>loading..</h2> })

export {
    RoomComponent
}