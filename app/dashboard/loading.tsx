import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  const num = 6;
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='pt-16 ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6'>
      {Array.from({ length: num }).map((_, index) => (
        <div className='flex items-center space-x-4' key={index}>
          <div className='space-y-2'>
            <Skeleton className='h-40 w-[500px]' />
            <Skeleton className='h-10 w-[500px]' />
            <Skeleton className='h-10 w-[500px]' />
            <div className='flex justify-between'>
              <Skeleton className='h-10 w-10 rounded-full' />
              <Skeleton className='h-10 w-30 ' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
