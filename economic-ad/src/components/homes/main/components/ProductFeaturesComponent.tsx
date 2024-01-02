import dynamic from 'next/dynamic';

const ProductFeatures = dynamic(() => import('~stories/ProductFeatures'), { ssr: false })

export function ProductFeaturesComponent() {

  return (
    <ProductFeatures />
  )
}
