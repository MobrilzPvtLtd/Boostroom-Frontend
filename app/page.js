 
import Image from "next/image";  
import Home from "./src/Home/Home"; 
// import { useRouter } from 'next/navigation';


export default function app() {
  // const router = useRouter()
  // const cookies = new Cookies();
  // const token = cookies.get('token');
  // if(token) {
    // router.push('/home')
  // }else{
  //   router.push('/login')
  // } 
  return (
  <> 
 
      <Home/> 
  </>
  );
}
