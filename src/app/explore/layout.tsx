import NotLoggedIn from "@/components/features/NotLoggedIn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return <>{user ? <>{children}</> : <NotLoggedIn />}</>;
}
