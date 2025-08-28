import React from 'react'
import HomeSlider from './HomeSlider/HomeSlider'

import { IBanner } from '@/types/Banner';

import FeatureHighlights from './FeatureHighlights';
import HotSale from './HotSale';
import PopularCategories from './PopulerCategories';
import CTABanner from './CTABanner';
import LatestProducts from './LatestProducts';
import ArticleSection from './ArticleSection';
import BestSeller from './BestSeller';
import EmailSubscription from './EmailSubscription';

const dummyBanners: IBanner[] = [
  {
    _id: '1',
    title: 'Banner 1',
    image: '/images/banners/dummy1.jpg',
  },
  {
    _id: '2',
    title: 'Banner 2',
    image: '/images/banners/dummy2.jpg',
  },
  {
    _id: '3',
    title: 'Banner 3',
    image: '/images/banners/dummy3.jpg',
  },
];

const Home = () => {
  return (
    <div>
      <HomeSlider
        banners={dummyBanners}
        isLoadingBanners={false}
      />
      <FeatureHighlights />
      <HotSale />
      <PopularCategories />
      <CTABanner />
      <LatestProducts />
      <ArticleSection />
      <BestSeller />
      <EmailSubscription />
    </div>
  )
}

export default Home