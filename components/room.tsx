'use client';

import dynamic from "next/dynamic";
import { ToolBar } from "./tool-bar";

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
})

export const Room = () => {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-1">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          config={{
            file: {
              attributes: {
                crossOrigin: "true",
              }
            }
          }}
        />
      </div>
      <ToolBar />
    </div>
  );
}