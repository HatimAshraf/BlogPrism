import { handleSubmission } from '@/app/action';
import Submitbutton from '@/app/general/Submitbutton';
// import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

function createBlog() {
  return (
    <div>
      <Card className='max-w-lg mx-auto'>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new Post for your blog</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-4' action={handleSubmission}>
            <div className='flex flex-col gap-4'>
              <label>Title</label>
              <Input name='title' required type='text' placeholder='Title' />
            </div>
            <div className='flex flex-col gap-4'>
              <label>Content</label>
              <Textarea name='content' required placeholder='Content' />
            </div>
            <div className='flex flex-col gap-4'>
              <label>Image URL</label>
              <Input
                required
                name='imageUrl'
                type='text'
                placeholder='Image URL'
              />
            </div>
            <Submitbutton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default createBlog;
