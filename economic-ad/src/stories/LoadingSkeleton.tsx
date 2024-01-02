import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface LoadingSkeletonProps {
    count: number;
}
 
export const LoadingSkeleton = ({ count }: LoadingSkeletonProps) => { 
    return <Skeleton count={13} />
}
 