import Image from "next/image";

interface ErrorStateProps{
  title: string;
  description: string;
  image?: string;
}

const EmptyState = ({
  title,
  description,
  image="/empty.svg",
}:ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[92%]">
        <Image src={image} alt="Empty" width={240} height={240}/>
        <div className="flex flex-col gap-y-2 text-center">
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

export default EmptyState;