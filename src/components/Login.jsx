import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.state )

  const { googleSingIn, loginUser } = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    loginUser(email, password)
      .then(result => {
        console.log(result)
        alert("login in successfully")
        navigate(location.state || "/dashboard")
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  }

  const socialSingIn = () => {
    googleSingIn()
      .then(result => {
        navigate(location.state || "/dashboard")
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200/50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Please enter your details to sign in to TaskFlow.
            </p>
          </div>

          {/* Social Login Button */}
          <button onClick={socialSingIn}
            type="button"
            className="btn btn-outline border-base-300 hover:border-primary w-full flex items-center justify-center gap-2 font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="divider text-xs text-base-content/40 my-4">OR</div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label p-0">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <a href="#forgot" className="text-xs link link-primary no-underline hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Log In
              </button>
            </div>
          </form>
          {error && (
            <div className="alert alert-error text-sm py-2 px-4 shadow-sm rounded-lg flex items-center gap-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Register Link */}
          <p className="text-sm text-center text-base-content/70 mt-4">
            Don't have an account?{' '}
            <Link to="/register" className="link link-primary font-semibold no-underline hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;