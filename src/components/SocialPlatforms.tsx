import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, VideoIcon } from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';

const platforms = [
  {
    title: 'Twitter (X)',
    description: 'Threads, insights, and community engagement',
    icon: <RiTwitterXFill className='w-6 h-6 ' />,
    label: 'Engagement',
  },
  {
    title: 'TikTok',
    description: 'Short-form educational and engaging video content',
    icon: <VideoIcon className='w-6 h-6 text-[#FE2C55]' />,
    label: 'Video',
  },
  {
    title: 'Instagram',
    description: 'Visual storytelling, reels, and brand positioning',
    icon: <Instagram className='w-6 h-6 text-[#E4405F]' />,
    label: 'Visuals',
  },
];

export default function SocialPlatforms() {
  return (
    <div className='space-y-8'>
      <div className='space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>
          Social Media Platforms
        </h2>
        <p className='text-muted-foreground text-lg'>
          I create and distribute content across:
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {platforms.map((platform) => (
          <Card
            key={platform.title}
            className='relative overflow-hidden group border-border/50 bg-card hover:shadow-sm transition-all duration-300 shadow-none'
          >
            <CardContent className='px-8 py-2 space-y-4'>
              <div className='flex justify-between items-start'>
                <div className='p-3 rounded-2xl bg-muted group-hover:bg-background transition-colors'>
                  {platform.icon}
                </div>
                <Badge variant='secondary' className='font-normal'>
                  {platform.label}
                </Badge>
              </div>
              <div className='space-y-2'>
                <h3 className='text-xl font-bold'>{platform.title}</h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {platform.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
