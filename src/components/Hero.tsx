import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between gap-12 '>
      {/* Item One: Left Content */}
      <div className='flex-1 space-y-6'>
        <div className='space-y-4'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-foreground'>
            Hi, I&apos;m Defi_Godwinn
          </h1>
          <h2 className='text-xl md:text-2xl font-semibold text-muted-foreground'>
            Content Creator
          </h2>
          <p className='text-lg text-muted-foreground leading-relaxed max-w-prose'>
            Welcome to my portfolio! Here, you&apos;ll find everything from
            converting web3 videos and several web3 projects i have worked with
            to amazing tools i use and my journey so far, and more...
          </p>
        </div>

        <div>
          <Button size='lg' className='px-8'>
            Let&apos;s work together!
          </Button>
        </div>
      </div>

      {/* Item Two: Right Image */}

      <div className='w-full relative max-w-150 aspect-square bg-muted rounded-md'>
        <Image
          src='defi_godwinn.png'
          alt='Defi GODWINN'
          className='object-cover w-full h-full rounded-md'
          fill
        />
      </div>
    </div>
  );
}
