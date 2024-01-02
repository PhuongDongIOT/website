import { HeroSections } from '~stories/HeroSections';
import { TransformBackgroundAnimation } from '~components/common/animations';

export function HeroComponent() {

  return (
    <TransformBackgroundAnimation>
      <HeroSections />
    </TransformBackgroundAnimation>
  )
}
