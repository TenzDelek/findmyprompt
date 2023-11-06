'use client'
import { useState,useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Profile from '@components/profile'
const MyProfile = () => {
  const router=useRouter();
    const {data: session}=useSession();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchPost=async ()=>{
          const response= await fetch(`/api/users/${session?.user.id}/posts`);
          const data=await response.json();
          setPosts(data);
        }
        if(session?.user.id)fetchPost();
          },[])
    const handleEdit =(post)=>{
      //we will call the endpoints
      router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async(post)=>{
        const hasConfirmed=confirm("Are you sure about that");
        if(hasConfirmed)
        {
          try {
            await fetch(`/api/prompt/${post._id.toString()}`,{
              method:'DELETE'
            });
            const filterPosts=posts.filter((p)=>p._id !==post._id);
            setPosts(filterPosts);
          } catch (error) {
            console.log(error)
          }
        }
    }
  return (
    <Profile
    name="my"
    desc="Welcome to My Personalised Profile"
    data={posts} 
    handleEdit={handleEdit}
    handleDelete={handleDelete}/>
  )
}

export default MyProfile