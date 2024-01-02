import { Meta } from 'Components/layout/Meta';
import { AppConfig } from '@/utils/configs/AppConfig';
import { Banner } from 'Components/templates/Banner';
import { Footer } from 'Components/templates/Footer';
import { Hero } from 'Components/templates/Hero';
import { VerticalFeatures } from 'Components/templates/VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };