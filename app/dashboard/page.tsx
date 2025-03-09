import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { getUserData } from '../action';
import BlogCard from '../general/BlogCard';

const dashboard = async () => {
  const data = await getUserData();
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((post) => {
          return <BlogCard key={post?.id} data={post} />;
        })}
      </div>
    </div>
  );
};

export default dashboard;
