import Link from 'next/link';

import Image from 'next/image';

interface BlogCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
async function BlogCard({ data }: BlogCardProps) {
  return (
    <div
      className='group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-all
     duration-300 shadow-md hover:shadow-lg'
    >
      <Link href={`/blog/${data.id}`} className='block w-full h-full'>
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={data.imageUrl}
            alt='ImageURL'
            fill
            className='object-cover transition-transform duration-300 transform group-hover:scale-105'
          />
        </div>
        <div className='p-4'>
          <h3 className='mb-2 text-lg font-semibold'>{data.title}</h3>
          <p className='mb-2 text-sm text-gray-600 line-clamp-2'>
            {data.content}
          </p>
        </div>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center space-x-2'>
            <div className='relative size-8 overflow-hidden rounded-full'>
              <Image
                src={data.authorImage}
                alt='ImageURL'
                fill
                className='object-cover'
              />
            </div>
            <p className='text-md font-medium text-gray-600'>
              {data.authorName}
            </p>
          </div>
          <time className='text-sm text-gray-600'>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(data.createdAt)}
          </time>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
