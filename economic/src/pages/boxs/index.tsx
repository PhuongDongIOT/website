import { useSpring, animated } from '@react-spring/web';
import RustComponent from '~components/wsam/RustComponent';
import GoogleMapsEmbedComponents from '~components/google/GoogleMapsEmbedComponents'


export default function MyComponent() {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    <>
      <RustComponent numberOne={1} numberTwo={1} />
      <GoogleMapsEmbedComponents />
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
    </>
  )
}
