"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell } from "lucide-react";

const ProfileScetion = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  return (
    <>
      {" "}
      <div className="w-full flex items-center gap-2">
        <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#4F46BA] text-white w-full justify-start">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/122344948?v=4"
                  alt="Profile picture"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium hidden sm:inline-block">Welcome Ankit</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Profile</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/122344948?v=4"
                  alt="Profile picture"
                />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">Ankit</h2>
              <p className="text-sm text-muted-foreground">ankit@example.com</p>
              <div className="flex gap-2">
                <Button  className="bg-[#4F46BA] text-white">Change password</Button>
                <Button
                  onClick={() => {
                    setIsProfileOpen(false);
                    setIsEditOpen(true);
                  }}
                >
                  Edit profile
                </Button>
              </div>
              <Button onClick={() => signOut()}>Logout</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/122344948?v=4"
                    alt="Profile picture"
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                {/* <Button variant="outline">Change Picture</Button> */}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" defaultValue="Ankit" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" defaultValue="" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="ankit@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="experience">Experience</Label>
                <Textarea id="experience" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="education">Education</Label>
                <Textarea id="education" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="about">About you</Label>
                <Textarea id="about" />
              </div>
              <Button type="submit" className="bg-[#4F46BA]">Update changes</Button>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="bg-[#4F46BA] text-white">
              <Bell className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Notifications</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <p>You have no new notifications.</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ProfileScetion;
