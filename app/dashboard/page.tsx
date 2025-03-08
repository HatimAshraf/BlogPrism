import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const dashboard = async () => {
  return (
    <div>
      <div className='flex items-center justify-between my-4'>
        <h2 className='text-xl font-medium'>Your Blog Articles</h2>
        <Link
          href='/dashboard/create'
          className={buttonVariants({ variant: 'outline' })}
        >
          Create new Blog
        </Link>
      </div>
    </div>
  );
};

export default dashboard;
