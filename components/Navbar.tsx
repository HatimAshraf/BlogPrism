import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className='p-5 flex items-center justify-between'>
      <div className='flex items-center gap-6 p-2'>
        <Link href='/'>
          <h1 className='text-2xl font-semibold'>
            Blog
            <span className='text-blue-500 ml-2 font-black'>Prism</span>
          </h1>
        </Link>
      </div>
      <div className='hidden sm:flex items-center justify-center gap-6'>
        <Link
          href='/'
          className='text-sm font-medium hover:text-blue-500 transition-colors'
        >
          Home
        </Link>
        <Link
          href='/dashboard'
          className='text-sm font-medium hover:text-blue-500 transition-colors'
        >
          Dashboard
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <Button variant='default' className='bg-blue-500 hover:bg-blue-600'>
          login
        </Button>
        <Button variant='outline'>Signup</Button>
      </div>
    </nav>
  );
};

export default Navbar;
