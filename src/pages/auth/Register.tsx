import { ButtonWithLoader, InputWithIcon } from "@/components/ui";
import { AuthLayout } from "@/layouts";
import { Lock, LockOpen, MailIcon, User } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";

const Register = () => {
  const { type } = useLocation().state as { type: string };
  if (!type) {
    return <Navigate to="/auth/type" />;
  }

  return (
    <AuthLayout
      title="Create Account"
      description={`You are registering as a ${type}`}
    >
      <form className="space-y-4">
        <InputWithIcon
          icon={<User size={20} />}
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
        />
        <InputWithIcon
          icon={<MailIcon size={20} />}
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
        />
        <div className="space-y-1">
          <InputWithIcon
            icon={<LockOpen size={20} />}
            type="password"
            label="Password"
            placeholder="Minimum 8 characters"
          />
          <p className="text-xs text-muted">
            At least 8 characters; lower and uppercase letters, numbers and
            symbols
          </p>
        </div>
        <InputWithIcon
          icon={<Lock size={20} />}
          type="password"
          label="Confirm Password"
          placeholder="Minimum 8 characters"
        />
        <div className="space-y-4">
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              id="terms"
              className="accent-secondary mt-1"
            />
            <label htmlFor="terms" className="text-xs md:text-sm text-muted">
              I agree to Nomomics{" "}
              <Link
                to="/terms-of-service"
                className="text-secondary font-semibold"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy-policy"
                className="text-secondary font-semibold"
              >
                Privacy Policy
              </Link>{" "}
              by creating my account
            </label>
          </div>
          <div className="flex gap-2 items-start">
            <input
              type="checkbox"
              id="marketing"
              className="accent-secondary mt-1"
            />
            <label
              htmlFor="marketing"
              className="text-xs md:text-sm text-muted"
            >
              Send me special offers, learning tips, and personalized
              recommendations
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" id="age" className="accent-secondary" />
            <label htmlFor="age" className="text-xs md:text-sm text-muted">
              Are you above 18 years old?
            </label>
          </div>
        </div>
        <ButtonWithLoader
          type="submit"
          className="w-full btn-primary h-11 rounded-full"
          initialText="Create Account"
          loadingText="Creating account..."
        />

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-secondary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
