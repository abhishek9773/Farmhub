import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black/90 text-xl">
      <Tabs defaultValue="account" className="w-[600px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Login</TabsTrigger>
          <TabsTrigger value="password">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Login</CardTitle>
              <CardDescription>
                Sign in to your account. You can use your email or sign in with
                Google. If you haven't registered yet, please create an account
                to access all features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input
                  id="password"
                  type="password"
                  // defaultValue="Enter strong password"
                  placeholder="Enter strong password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Login</Button>
              <p className="opacity-50 text-center text-sm"> or</p>
              <Button className="w-full flex gap-2">
                <FaGoogle />
                <p>Login with Google</p>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Signup</CardTitle>
              <CardDescription>
                Create a new account to get started. You can sign up using your
                email or with Google. After registering, you'll be able to log
                in and access all features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input id="Email" type="Email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">confrom password</Label>
                <Input
                  id="confrom"
                  type="password"
                  // defaultValue="Enter strong password"
                  placeholder="Enter strong password"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Signup</Button>
              <p className="opacity-80 font-light">or</p>
              <Button className="w-full flex gap-2">
                <FaGoogle /> <p>Login with Google</p>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
