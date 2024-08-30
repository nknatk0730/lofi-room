import { Play } from "lucide-react"
import { Button } from "./ui/button"

export const Pomodoro = () => {
  return (
    <div className="flex items-center gap-3">
        <Button size="icon" variant="ghost">
          <Play size={20} />
          <span className="sr-only">start</span>
        </Button>
        <time>25:00</time>
        <div className="overflow-hidden rounded-full h-5 w-60">
          <div className="size-full bg-sky-500"></div>
        </div>
      </div>
  )
}