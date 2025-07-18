"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {

  const {data:session} = authClient.useSession();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onSubmit = async () =>{
    await authClient.signUp.email({
      email,
      name,
      password
    },{
      onSuccess: ()=>{
        window.alert("Success");
      },
      onError:()=>{
        window.alert("Something went wrong")
      }
    })
  }

  const onLogin = async () =>{
    await authClient.signIn.email({
      email,
      password
    },{
      onSuccess: ()=>{
        window.alert("Success");
      },
      onError:()=>{
        window.alert("Something went wrong")
      }
    })
  }

  if(session){
    return <div className="flex flex-col p-5 gap-y-5 ">
      <p>Logged in {session.user.name}</p>
      <Button onClick={()=>authClient.signOut()}>Sign out</Button>
    </div>
  }
  return (<>
  
      <div className="text-4xl flex flex-col w-[50%] p-4 gap-y-3">
        <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input placeholder="Enter your gmail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={onSubmit}>Create User</Button>
      </div>

      <div className="text-4xl flex flex-col w-[50%] p-4 gap-y-3">
        <Input placeholder="Enter your gmail" value={loginMail} onChange={(e) => setLoginMail(e.target.value)} />
        <Input placeholder="Enter your password" type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <Button onClick={onLogin}>Login</Button>
      </div>
      </>
  );
}
