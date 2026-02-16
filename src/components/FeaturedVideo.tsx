import { Badge } from '@/components/ui/badge';

export function FeaturedVideo() {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto'>
      <div className='w-full lg:w-1/2 flex justify-center'>
        <div className='relative w-full max-w-75 aspect-9/16 rounded-[2rem] border-4 border-muted bg-muted shadow-xl overflow-hidden ring-1 ring-border'>
          <video
            src='https://ik.imagekit.io/yurex12/DEfi%20godwinn%20video.mp4'
            className='h-full w-full object-cover'
            controls
            playsInline
            poster='https://ik.imagekit.io/yurex12/DEfi%20godwinn%20video.mp4/ik-thumbnail.jpg'
          />
        </div>
      </div>

      <div className='w-full lg:w-1/2 space-y-6'>
        <div className='space-y-3'>
          <Badge
            variant='secondary'
            className='rounded-full px-4 py-1 font-medium'
          >
            Featured Case Study
          </Badge>
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>
            DeFi Godwin: <br />
            <span className='text-muted-foreground font-normal'>
              Simplified for the Community.
            </span>
          </h2>
        </div>

        <div className='space-y-4 max-w-md'>
          <p className='text-xl text-foreground/80 leading-relaxed'>
            I created this piece to show how complex Web3 concepts can be broken
            down into engaging, short-form content that actually drives project
            participation.
          </p>
          <p className='text-muted-foreground leading-relaxed'>
            The focus was on clarity and speed—making sure the community
            understood the value proposition in under 80 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
