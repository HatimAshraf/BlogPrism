import { getPost } from '@/app/action';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type Params = Promise<{ id: string }>;
async function page({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getPost(id);
  return (
    <div className='max-w-3xl mx-auto py-8 px-4'>
      <Link
        href='/dashboard'
        className={buttonVariants({ variant: 'outline' })}
      >
        Back to dashboard
      </Link>
      <div className='mb-8 mt-6'>
        <h1 className='text-3xl font-bold tracking-tight mb-4'>{data.title}</h1>
        <div className='flex items-center space-x-4'>
          <div className='relative size-10 overflow-hidden rounded-full'>
            <Image
              src={data.authorImage}
              alt='Author Image'
              fill
              className='object-cover'
            />
          </div>
          <div className='flex items-center justify-around'>
            <div>
              <p className='text-lg font-medium text-gray-600'>
                {data.authorName}
              </p>
            </div>
            <div>
              <p className='text-lg font-medium text-gray-600'>
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(data.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative h-96 overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 shadow-md'>
        <Image
          src={data.imageUrl}
          alt='ImageURL'
          fill
          className='object-contain'
        />
      </div>
      <div className='mt-8'>
        <p className='text-gray-600'>{data.content}</p>
      </div>
    </div>
  );
}

export default page;
