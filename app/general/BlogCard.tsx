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
     duration-300 hover:shadow-lg'
    >
      <Link
        href={
          'https://www.techjuice.pk/meet-the-winners-of-the-pakistan-mobile-app-awards/'
        }
        className='block w-full h-full'
      >
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
          <p className='mb-4 text-sm text-gray-600'>{data.content}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
