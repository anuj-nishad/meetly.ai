import { auth } from "@/lib/auth"
import HOMEVIEW from "@/modules/home/ui/views/home-view"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

const PAGE = async() => {
  const session = await auth.api.getSession({
    headers: await headers(),
  }) 

  if(!session){
    redirect("/sign-in")
  }

  return <HOMEVIEW/>
}

export default PAGE