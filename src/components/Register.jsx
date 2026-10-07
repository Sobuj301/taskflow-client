import { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import { updateProfile } from "firebase/auth";


const Register = () => {
  const { createUser, updateUserProfile } = useAuth()
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')



  const handleCreateAccount = (e) => {
    e.preventDefault()
    setError("")
    if (password !== confirmPassword) {
      return alert("password not match")
    }
    createUser(email, password)
      .then(result => {
        if (result) {
          updateUserProfile(name, photo)
            .then(() => {
              alert('User Successfully Create')
              setName('')
              setPhoto('')
              setEmail('')
              setPassword('')
              setConfirmPassword('')
            })
            .catch((error) => {
              setError(error.message)
            });
        }
      })
      .catch(error => {
        setError(error.message)
        console.log(error)
      })


  }
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-200/50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          {/* Form Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-sm text-base-content/60 mt-1">
              Join TaskFlow to manage your daily tasks efficiently.
            </p>
          </div>

          <form onSubmit={handleCreateAccount} className="space-y-4">
            {/* Full Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="John Doe"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo Url</span>
              </label>
              <input
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                placeholder="name@example.com"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary transition"
              />
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Confirm Password</span>
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                name="confirmPassword"
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
                Register
              </button>
            </div>
          </form>
          {error && (
            <p className="mt-2 text-sm text-red-400 bg-red-950/40 border border-red-500/30 rounded-lg px-3 py-2 text-center font-medium animate-fade-in">
              {error}
            </p>
          )}

          {/* Login Link */}
          <p className="text-sm text-center text-base-content/70 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="link link-primary font-semibold no-underline hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;