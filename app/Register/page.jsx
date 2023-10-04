import RegisterFrom from "@/components/RegisterFrom";
import { getServerSession } from "next-auth";
import { RedirectType, redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";




export default async function Register() {
  const session = await getServerSession(authOptions);

  if(session) redirect('/dashboard');

  return <RegisterFrom />;
}