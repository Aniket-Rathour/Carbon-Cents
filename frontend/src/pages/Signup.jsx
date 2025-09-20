import React from "react";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";






function Signup() {
  const navigate = useNavigate();
  const handleGoogleSignIn = (response) => {
    console.log(response);
    navigate("/home")
    
  };

  const handleFailure = (error) => {
    console.error("Google Sign-In Error:", error);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-[url("/hero.png")] bg-cover bg-center bg-gray-50 '>
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Logo */}
        <h1 className="mb-4 ">
          <img src="logo.jpeg" alt="Logo" />
        </h1>

        {/* Heading */}
        <h2 className="text-center text-lg font-semibold text-gray-700 mb-6">
          Create Your Corbon-Cent Account
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="newsletter" className="h-4 w-4 text-green-600" />
            <label htmlFor="newsletter" className="text-sm text-gray-600">
              Subscribe to our newsletter
            </label>
          </div>

          {/* Social login */}
          <div className="text-center text-gray-500 text-sm my-4">or sign up with</div>
          <div className="flex justify-center gap-4">
            {/* Google Login */}
            <GoogleLogin
              onSuccess={handleGoogleSignIn}
              onError={handleFailure}
              useOneTap
            />
            <img src="/facebook.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
          </div>

          {/* Submit button */}
          <NavLink to="/home">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Create Account
            </button>
          </NavLink>
        </form>

        {/* Footer */}
        <div className="flex justify-between text-xs text-gray-500 mt-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Account?</a>
          <span>© 2024 EcoTrack</span>
        </div>
      </div>
    </div>
  );
} 

export default Signup;
