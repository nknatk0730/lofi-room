'use client';

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { User } from "lucide-react";

export const OnlineStatus = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">
          <User />2
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">user status</PopoverContent>
    </Popover>
  );
}