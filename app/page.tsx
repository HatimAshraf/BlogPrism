import { getData } from './action';

export default async function Home() {
  const data = await getData();
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold tracking-tight mb-8'>Latest Post</h1>
      <div className='grid gri-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((post) => {
          return (
            <div key={post.id} className='flex flex-col gap-2'>
              <h1>{post.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
