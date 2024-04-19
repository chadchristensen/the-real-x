import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage(): React.ReactElement {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Social login is quick and easy. Sign in to access all the features.
        </p>
      </div>
      <div className="w-full max-w-sm space-y-4">
        <Button className="w-full">Login with Facebook</Button>
        <Button className="w-full">Login with Google</Button>
        <Button className="w-full">Login with Twitter</Button>
        <Button className="w-full">Login with GitHub</Button>
        <div className="space-y-2 text-center text-sm">
          <p>
            By clicking a social login button, you agree to our Terms of Service
            and have read and acknowledge our Privacy Policy.
          </p>
          <Link className="underline" href="#">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
