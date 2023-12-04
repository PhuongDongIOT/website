import dynamic from 'next/dynamic';

const Testimonials = dynamic(() => import('~stories/Testimonials'), { ssr: false })

export function TestimonialsComponent() {

  return (
    <Testimonials />
  )
}
