"use server"
import { redirect } from 'next/navigation';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";

export async function handleSubmission(formData: FormData){
  const {getUser} =  getKindeServerSession() 
  const user = await getUser()
  const data = await prisma.blogPost.create({
    data: {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      imageUrl: formData.get('imageUrl') as string,
      authorId: user.id,
      authorName: user.given_name as string,
      authorImage: user.picture as string,  

    }
  })
  return redirect('/dashboard')
}