import RegisterForm from "@/components/register-form";
import { type Metadata } from "next";
import Link from "next/link";
import getCurrentUser from "@/actions/user/get-current-user";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign up | Bisa Interview",
  description: "Register to continue using bisa interview.",

  openGraph: {
    title: "Sign up | Bisa Interview",
    description: "Register to continue using bisa interview",
    // url: "http://localhost:3000/signup",
    siteName: "Bisa Interview",
    locale: "en_US",
    type: "website",
  },
};

const RegisterPage = async () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      {/* login form */}
      <div className="min-w-[400px] border lg:min-w-[476px]">
        <div className=" space-y-8 p-8">
          <div>
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="font-gray-600 text-sm">
              register to continue using this app.
            </p>
          </div>

          <RegisterForm />
        </div>

        <div className="flex h-12 justify-center">
          <p className="text-sm font-light tracking-wide text-gray-600  dark:text-gray-400">
            Have an account?{" "}
            <Link
              href="/signin"
              className="hover:underline"
              aria-label="Sign up to your account"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      {/* end login form */}
    </div>
  );
};

export default RegisterPage;
