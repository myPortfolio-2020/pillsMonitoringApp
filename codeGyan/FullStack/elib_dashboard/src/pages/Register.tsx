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
function RegisterPage() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Enter Login to start your work</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label>Enter first name</Label>
              <Input
                id="firstname"
                type="text"
                placeholder="first name"
                required
              />
            </div>

            <div>
              <Label>Enter email</Label>
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
            <div>
              <Button>create an account</Button>
            </div>
          </CardFooter>
          <div>
            Already have an account,
            <Link to={"/auth/Login"} className="underline">
              Sign in
            </Link>
          </div>
        </Card>
      </section>
    </>
  );
}

export default RegisterPage;
