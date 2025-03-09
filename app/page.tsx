import { Suspense } from 'react';
import { getData } from './action';
import BlogCard from './general/BlogCard';

async function BlogPost() {
  const data = await getData();
  return (
    <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map((post) => (
        <BlogCard key={post.id} data={post} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold tracking-tight mb-8'>Latest Post</h1>
      <Suspense>
        <BlogPost />
      </Suspense>
    </div>
  );
}
