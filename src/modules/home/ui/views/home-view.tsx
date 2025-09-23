"use client"

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


const HOMEVIEW = () => {

  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({text: "Anuj"}));
  return <div>
    {data?.greeting}
  </div>
}

export default HOMEVIEW;