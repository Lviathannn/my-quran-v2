import React from "react";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function NotLoggedIn() {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-medium">
        Login atau Register untuk melanjutkan
      </h1>
      <div className="space-x-3">
        <Button asChild>
          <LoginLink>Login</LoginLink>
        </Button>
        <Button asChild>
          <RegisterLink>Register</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
