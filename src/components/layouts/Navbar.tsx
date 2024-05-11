import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MobileNavbar from "./MobileNavbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-background">
      <div className="container flex h-14 w-full items-center justify-between gap-4 sm:pl-20">
        <div className="flex items-center gap-3">
          <MobileNavbar />
        </div>
        <div className="space-x-3">
          <Button asChild className="rounded-xl">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src={user?.picture as string} alt="@shadcn" />
                    <AvatarFallback>
                      {user?.family_name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-20">
                  <DropdownMenuItem>
                    <LogoutLink className="flex gap-2">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </LogoutLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <LoginLink postLoginRedirectURL="/api/auth/success">
                Login
              </LoginLink>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
