import dynamic from "next/dynamic";
import { Pomodoro } from "./pomodoro";

const UserMenu = dynamic(() => import('@/components/user-menu').then(mod => mod.UserMenu), {
  ssr: false,
})
const Playlist = dynamic(() => import('@/components/playlist').then(mod => mod.Playlist), {
  ssr: false,
})
const OnlineStatus = dynamic(() => import('@/components/online-status').then(mod => mod.OnlineStatus), {
  ssr: false,
})



export const ToolBar = () => {
  return (
    <div className="gap-3 bg-muted border-t h-14 flex items-center px-4">
      <Pomodoro />
      <span className="flex-1"></span>
      <OnlineStatus />
      <Playlist />
      <UserMenu />
    </div>
  );
}