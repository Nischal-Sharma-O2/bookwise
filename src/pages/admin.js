import LoginHeader from "../components/ui/authUi/headerLogin";
import Button from "../components/ui/authUi/button";
import InputField from "../components/ui/authUi/inputField";

export default function Admin() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <LoginHeader title="Sign In To Dashboard" />
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
              id="password"
              name="password"
              type="password"
              autoComplete="complete-password"
            />
            <Button name="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
}
