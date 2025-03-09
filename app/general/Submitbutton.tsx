'use client';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

function Submitbutton() {
  const { pending } = useFormStatus();
  return (
    <Button className='w-fit' type='submit' disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
}

export default Submitbutton;
