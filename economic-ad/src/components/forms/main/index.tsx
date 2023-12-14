import dynamic from 'next/dynamic';

const Information = dynamic(() => import('./components/Information'), { ssr: false });


export {
    Information
}