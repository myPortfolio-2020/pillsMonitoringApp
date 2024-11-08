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
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";


function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);






  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log("data", { email, password });



    // make server call
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter Login to start your work</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Enter user</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="email"
                required
              />
            </div>
            <div>
              <Label>Enter Password</Label>
              <Input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin}>Sign In</Button>
          </CardFooter>
          <div>
            Don't have an account,
            <Link to={"/auth/Register"} className="underline">
              Sign up
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}

export default LoginPage;
