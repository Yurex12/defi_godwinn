import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export function MyJourney() {
  return (
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-24'>
      <div className='lg:w-1/3'>
        <div className='lg:sticky lg:top-24 space-y-4'>
          <Badge variant='outline' className='text-primary border-primary/30'>
            My Story
          </Badge>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight '>
            My Journey
          </h2>
          <div className='h-1 w-20 bg-primary rounded-full' />
          <p className='text-muted-foreground text-sm uppercase tracking-widest font-medium'>
            Started Dec 2025
          </p>
        </div>
      </div>

      <div className='lg:w-2/3 space-y-8 sm:space-y-12'>
        <div className='space-y-4'>
          <p className='text-xl md:text-2xl leading-relaxed text-foreground/80 font-medium'>
            I began my content creation journey in December 2025 after joining
            the TS Academy program, where I was introduced to the creator
            economy and learned how to strategically position myself as a
            digital brand.
          </p>
        </div>

        <div className='space-y-4'>
          <h3 className='text-lg font-bold uppercase tracking-wider text-primary'>
            The Mission
          </h3>
          <p className='text-lg text-muted-foreground leading-relaxed'>
            As a Web3 content creator, I focus on simplifying complex blockchain
            concepts, educating beginners about Web3, and creating
            high-converting content for crypto projects. My content is designed
            to inform, engage, and drive action.
          </p>
        </div>

        <div className='space-y-6'>
          <h3 className='text-lg font-bold uppercase tracking-wider text-primary'>
            I primarily create for:
          </h3>
          <div className='grid gap-4'>
            {[
              'Web3 beginners looking to understand crypto and blockchain',
              'Traders and enthusiasts seeking simplified insights',
              'Web3 projects that need converting, community-driven content',
            ].map((item, index) => (
              <Card
                key={index}
                className='border-border bg-muted/30 shadow-none'
              >
                <CardContent className='p-4 flex items-center gap-4'>
                  <div className='h-2 w-2 rounded-full bg-primary shrink-0' />
                  <span className='text-foreground/70  font-medium'>
                    {item}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className='pt-6 border-t border-border space-y-4'>
          <p className='text-lg text-muted-foreground leading-relaxed italic'>
            Beyond education, I also document my personal growth journey in Web3
            — sharing lessons, experiences, and insights as I continue to evolve
            in the space.
          </p>
          <p className='text-xl font-semibold '>
            My goal is to build authority in the Web3 ecosystem while helping
            others navigate it with clarity and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
