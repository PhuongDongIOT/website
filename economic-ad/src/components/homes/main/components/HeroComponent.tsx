import { HeroSections } from '~stories/HeroSections';
import { useSpring, animated } from '@react-spring/web'

export function HeroComponent() {
    const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <animated.div style={props}>
      <HeroSections />
    </animated.div>
  )
}
