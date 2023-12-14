'use client';

import * as React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface TransformBackgroundAnimationProps {
    children: React.ReactNode
}

function TransformBackgroundAnimation({
    children,
  }: {
    children: React.ReactNode
  }) {
    const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <animated.div style={props}>
        { children }
    </animated.div>
  )
}

export {
    TransformBackgroundAnimation
}
