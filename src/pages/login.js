import LoginHeader from "../components/ui/AuthUi/headerLogin";
import InputField from "../components/ui/AuthUi/inputField";
import Button from "../components/ui/AuthUi/button";

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <LoginHeader title="Sign In To Your Account" />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <InputField
              htmlFor="email"
              label="Email Address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <InputField
              htmlFor="password"
              label="Password"
              option="Forgot Password?"
              id="password"
              name="password"
              type="password"
              autoComplete="complete-password"
            />
            <Button name="Sign In" />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a
              href="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Not a member ?
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
