import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../../components/ui/button';
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className='flex items-center justify-between'>
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

      {user ? (
        <div className='flex items-center gap-4'>
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: 'secondary' })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className='flex items-center gap-4'>
          <LoginLink className={buttonVariants()}>Sign in</LoginLink>

          <RegisterLink className={buttonVariants({ variant: 'secondary' })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
