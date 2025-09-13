"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import {useRouter} from "next/navigation"

const HOMEVIEW = () => {
  const router = useRouter();
  const {data:session} = authClient.useSession();

  if(!session){
    return <div>
      Loading.....
    </div>
  }

  return <div>
    Logged in as {session?.user.name}
    <Button onClick={()=>{
      authClient.signOut({
        fetchOptions: {
          onSuccess: ()=>router.push("/sign-in")
        }
      })
    }}>Log out</Button>
  </div>
}

export default HOMEVIEW;