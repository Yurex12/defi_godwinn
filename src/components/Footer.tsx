import { Copyright } from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import { SiTiktok } from 'react-icons/si';

export function Footer() {
  return (
    <footer className='mx-auto max-w-7xl border-t py-10 px-6 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
        <div className='text-center md:text-left space-y-4'>
          <p className='text-sm font-bold uppercase tracking-widest text-primary'>
            Let&apos;s Connect
          </p>
          <div className='flex justify-center md:justify-start gap-6'>
            <a
              href='https://x.com/Defi_Godwinnn'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-foreground hover:text-primary transition-colors group'
            >
              <RiTwitterXFill className='size-5' />
              <span className='text-sm font-medium group-hover:underline underline-offset-4'>
                X
              </span>
            </a>
            <a
              href='https://www.tiktok.com/@defi_godwinn'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-foreground hover:text-primary transition-colors group'
            >
              <SiTiktok className='size-5' />
              <span className='text-sm font-medium group-hover:underline underline-offset-4'>
                TikTok
              </span>
            </a>
          </div>
        </div>

        <div className='flex justify-center md:justify-end items-center gap-x-1 text-sm text-muted-foreground'>
          Copyright {new Date().getFullYear()} <Copyright className='size-4' />{' '}
          DEFIGODWINN
        </div>
      </div>
    </footer>
  );
}
