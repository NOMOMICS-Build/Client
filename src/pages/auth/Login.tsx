import { ButtonWithLoader, InputWithIcon } from "@/components/ui"
import { AuthLayout } from "@/layouts"
import { Lock, MailIcon } from "lucide-react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <AuthLayout title="Welcome Back!" description="Login to your account">
        <form className="space-y-4">
          <InputWithIcon icon={<MailIcon size={20} />} type="email" label="Email Address" placeholder="Enter your email address" />
          <InputWithIcon icon={<Lock size={20} />} type="password" label="Password" placeholder="Minimum 8 characters" />
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="accent-secondary" />
              <label htmlFor="remember" className="text-sm text-muted">Remember me</label>
            </div>

            <Link to="/forgot-password" className="text-sm text-secondary font-semibold">Forgot Password?</Link>
          </div>
          <ButtonWithLoader type="submit" className="w-full btn-primary h-11 rounded-full" initialText="Sign In" loadingText="Logging in..." />
          <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/auth/type" className="text-secondary font-semibold">
              Register
            </Link>
          </p>
        </div>
        </form>
    </AuthLayout>
  )
}

export default Login