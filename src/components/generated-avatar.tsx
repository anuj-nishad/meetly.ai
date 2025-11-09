import {createAvatar} from "@dicebear/core"
import {botttsNeutral, initials} from "@dicebear/collection"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface GeneratedAvtaarProps{
  seed: string;
  className?: string;
  variant: "botttsneutral" | "initials";
}
const GeneratedAvtaar = ({
  seed,
  className,
  variant
}:GeneratedAvtaarProps) => {
  let avatar;
  
  if(variant === "botttsneutral"){
    avatar = createAvatar(botttsNeutral,{
      seed,
    })
  } else{
    avatar = createAvatar(initials, {
      seed,
      fontWeight: 500,
      fontSize: 42
    })
  }
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar"/>
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  )
}

export default GeneratedAvtaar;