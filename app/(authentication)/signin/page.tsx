import LoginForm from "@/components/login-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      {/* login form */}
      <div className="min-w-[400px] lg:min-w-[476px] border">
        <div className=" p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="font-gray-600 text-sm">
              login to continue using this app.
            </p>
          </div>

          <LoginForm />
        </div>

        <div className="h-12 flex justify-center">
          <p className="font-light text-sm text-gray-600 tracking-wide">
            don{"'"}t have an account?{" "}
            <Link href="/signup" className="hover:underline">
              register
            </Link>
          </p>
        </div>
      </div>
      {/* end login form */}
    </div>
  );
};

export default LoginPage;
