'use client';

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LofiSettings } from "@/types/settings";
import { ListVideo } from "lucide-react";
import { useForm } from "react-hook-form";
import useLocalStorageState from "use-local-storage-state";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const defaultValue: LofiSettings = {
  name: 'name',
  avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix",
  volume: 0.4,
  playList: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
}

export const Playlist = () => {
  const [settings, setSettings] = useLocalStorageState<LofiSettings>('lofi-settings', {
    defaultValue
  });

  const form = useForm<LofiSettings>({
    defaultValues: settings || defaultValue,
  });

  const onSubmit = (data: LofiSettings) => {
    setSettings(data);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <ListVideo size={20} />
          <span className="sr-only">PlayList</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              name="playList"
              render={({ field }) => (
                <FormItem>
                  <Label>playList</Label>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button>save</Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  );
}