import LoginForm from "@/components/login-form";
import { type Metadata } from "next";
import Link from "next/link";
import getCurrentUser from "@/actions/user/get-current-user";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in | Bisa Interview",
  description: "Login to continue using bisa interview.",

  openGraph: {
    title: "Sign in | Bisa Interview",
    description: "Login to continue using bisa interview",
    // url: "http://localhost:3000/signin",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const LoginPage = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) redirect("/");

  return (
    <div className="flex min-h-screen items-center justify-center px-3">
      {/* login form */}
      <div className="min-w-[400px] border lg:min-w-[476px]">
        <div className=" space-y-8 p-8">
          <div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="font-gray-600 text-sm">
              login to manage this app (Admin Only)
            </p>
          </div>

          <LoginForm />
        </div>

        {/* <div className="flex h-12 justify-center">
          <p className="text-sm font-light tracking-wide text-gray-600 dark:text-gray-400">
            don{"'"}t have an account?{" "}
            <Link
              href="/registration"
              className="hover:underline"
              aria-label="Log in to your account"
            >
              Register
            </Link>
          </p>
        </div> */}
      </div>
      {/* end login form */}
    </div>
  );
};

export default LoginPage;
