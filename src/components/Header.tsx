import { RiTwitterXFill } from 'react-icons/ri';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className='fixed top-0 z-50 mx-auto flex w-full items-center justify-between bg-white shadow-sm'>
      <div className='mx-auto flex max-w-384 flex-1 items-center justify-between px-6 py-4 md:py-6'>
        <Logo />

        <a
          href='https://x.com/defi_godwinnn'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:text-primary/90 transition-transform duration-300 hover:scale-110'
          aria-label='X'
        >
          <RiTwitterXFill size={25} />
        </a>
      </div>
    </header>
  );
}
