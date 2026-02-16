import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href='/'
      className={cn(
        'flex items-center gap-2 font-semibold text-primary',
        className,
      )}
    >
      <span className='flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white text-sm font-bold'>
        D
      </span>

      <span className='text-lg tracking-tight'>DEFI_GODWINN</span>
    </Link>
  );
}
