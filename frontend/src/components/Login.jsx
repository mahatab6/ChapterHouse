import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="h-[calc(100vh-120px)] flex items-center justify-center ">
      <div className="w-full max-w-sm mx-auto bg-gray-50 shadow-lg px-8 py-6 rounded-2xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Please Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "focus:ring-amber-400"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-300"
                  : "focus:ring-amber-400"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition duration-200 hover:cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Optional: Footer Links */}
        <p className="text-center text-sm text-gray-600 my-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-amber-500 hover:underline">
            Register
          </a>
        </p>

        {/* google sign in */}
        <div>
            <button className="w-full flex flex-wrap items-center gap-1 font-bold text-shadow-xl bg-blue-950 text-white justify-center rounded-md py-2 hover:bg-blue-500 focus:outline-none hover:cursor-pointer">
            <FaGoogle />
            Sign in with Google 
            </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
