import { FeaturedVideo } from '@/components/FeaturedVideo';
import { Hero } from '@/components/Hero';
import { MyJourney } from '@/components/MyJourney';
import SocialPlatforms from '@/components/SocialPlatforms';
import { Tools } from '@/components/Tools';

export default function Home() {
  return (
    <div className='space-y-15 md:space-y-25'>
      <Hero />
      <MyJourney />
      <Tools />
      <SocialPlatforms />
      <FeaturedVideo />
    </div>
  );
}
