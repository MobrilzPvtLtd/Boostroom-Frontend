"use client"

import Image from "next/image";
import Cookies from 'universal-cookie';
import { useRouter } from 'next/navigation'
import Login from "./src/Login/Login";


export default function Home() {
  const router = useRouter()
  const cookies = new Cookies();
  // const token = cookies.get('token');
  // if(token) {
    router.push('/brand')
  // }else{
    // router.push('/login')
  // }
  // const toke =  from cookies
  return (
  <>
   
  </>
  );
}
