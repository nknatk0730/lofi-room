'use client';

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "./ui/avatar";
import { LofiSettings } from "@/types/settings";
import useLocalStorageState from "use-local-storage-state";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const defaultValue: LofiSettings = {
  name: 'name',
  avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix",
  volume: 0.4,
  playList: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
}

export const UserMenu = () => {
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
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/9.x/adventurer/svg?seed=Felix" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>name</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="avatarUrl"
              render={({ field }) => (
                <FormItem>
                  <Label>avatar</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="volume"
              render={({ field }) => (
                <FormItem>
                  <Label>volume</Label>
                  <FormControl>
                    <Input type="number" {...field} />
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