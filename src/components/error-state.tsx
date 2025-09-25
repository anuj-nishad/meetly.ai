import { AlertCircleIcon } from "lucide-react"

interface ErrorStateProps{
  title: string;
  description: string;
}

const ErrorState = ({title, description}:ErrorStateProps) => {
  return (
    <div className="p-4 px-8 flex flex-1 items-center justify-center h-[92%]">
      <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
        <AlertCircleIcon className="size-6 text-primary"/>
        <div className="flex flex-col gap-y-2 text-center">
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorState;