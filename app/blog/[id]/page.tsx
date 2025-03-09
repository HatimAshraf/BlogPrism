import { getPost } from '@/app/action';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Params = Promise<{ id: string }>;
async function page({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getPost(id);
  return (
    <div className='max-w-3xl mx-auto py-8 px-4'>
      <Link href='/dashboard'>
        <Button className='text-blue-500'>Back to dashboard</Button>
      </Link>
    </div>
  );
}

export default page;
