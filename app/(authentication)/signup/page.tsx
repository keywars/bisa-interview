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
  const currentUser = await getCurrentUser();

  if (currentUser) redirect("/");

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {/* login form */}
      <div className="min-w-[400px] lg:min-w-[476px] border">
        <div className=" p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="font-gray-600 text-sm">
              register to continue using this app.
            </p>
          </div>

          <RegisterForm />
        </div>

        <div className="h-12 flex justify-center">
          <p className="font-light text-sm text-gray-600 tracking-wide">
            have an account?{" "}
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
