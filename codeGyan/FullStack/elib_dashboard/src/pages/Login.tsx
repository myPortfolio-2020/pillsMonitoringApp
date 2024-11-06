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
import { Link } from "react-router-dom";

function LoginPage() {
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
              <Input id="email" type="email" placeholder="email" required />
            </div>
            <div>
              <Label>Enter Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Sign In</Button>
          </CardFooter>
          <div>
            Don't have an account,
            <Link to={"/Register"} className="underline">
              Sign up
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}

export default LoginPage;
