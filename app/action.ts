"use server"
import { notFound, redirect } from 'next/navigation';
import { prisma } from "./utils/db";
import { getUser } from './kindeUser';
import { revalidatePath } from 'next/cache';

export async function handleSubmission(formData: FormData){
  const user = await getUser()
  if(!user){
    return redirect('/api/auth/register')
  }
  await prisma.blogPost.create({
    data: {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      imageUrl: formData.get('imageUrl') as string,
      authorId: user.id,
      authorName: user.given_name as string,
      authorImage: user.picture as string,  

    }
  })
  revalidatePath('/')
  return (redirect('/dashboard'))
}


export async function getData() {
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

export async function getPost(id: string) {

  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  if(!data){
    return notFound()
  }

  return data;
}

export async function getUserData(){
  const user = await getUser()
  await new Promise((resolve)=>{
    setTimeout(resolve, 1000)
  })
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: user.id
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return data
}