import { prisma } from './utils/db';

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      imageUrl: true,
      content: true,
      id: true,
      authorImage: true,
      authorName: true,
      createdAt: true,
    },
  });

  return data;
}
export default async function Home() {
  const data = await getData();
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold tracking-tight mb-8'>Latest Post</h1>
      <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((items, index) => {
          return (
            <div key={index}>
              <h2>{items.title}</h2>
              <p>{items.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
