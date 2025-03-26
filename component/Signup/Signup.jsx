"use client";

import React, { useState } from "react";
import { Mail, Globe, EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { axiosInstance } from "@/utils/axios";
import Link from "next/link";

const SignupForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const signupUser = async (userData) => {
    try {
      const response = await axiosInstance.post("/register", userData);
      if (response.data) {
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          message: "Signup failed. Please check your credentials.",
        };
      }
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "An error occurred. Please try again.",
      };
    }
  };

  const validateForm = (formData) => {
    const newErrors = {};

    // First Name validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    // Last Name validation
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validations
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password validation
    if (!formData.password_confirmation) {
      newErrors.password_confirmation = "Please confirm your password";
    } else if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
    };

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await signupUser(formData);
        if (response.success) {
          login(response.data.authToken, response.data.user);
          router.push("/");
          e.target.reset();
        } else {
          setErrors({ signup: response.message });
        }
      } catch (error) {
        setErrors({ signup: error.message });
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-dark-500">
      <div
        className=" h-full flex justify-center px-28 pt-36 pb-10 border-b border-orange-400"
        style={{
          backgroundImage: "url('/image/loginbg.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="hidden lg:block shadow-xl lg:w-[45%]">
          <div className="h-full relative bg-dark-500/80">
            <div className="absolute flex flex-col justify-between inset-0 top-[40%] ">
              <div className="flex flex-col justify-start px-6 ">
                <h3 className="text-yellow-400 text-xl font-medium mb-3">
                Greeting Fellow Member
                </h3>
                <h1 className="text-white text-4xl font-bold  mb-3">
                Create Your Account
                </h1>
                <p className="text-fuchsia-500 text-base">
                Join great marketplace and start using our awesome services
                </p>
              </div>
              <p className=" p-8 text-sm text-gray-300">
                © 2024 Mobrilz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] bg-dark-500/80 border-l-2 border-orange-300 shadow-xl flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md w-full mx-auto space-y-8 py-8">

            <form onSubmit={handleSubmit} className=" space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-100"
                    >
                      FIRST NAME
                    </label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      placeholder="First Name"
                      className={`mt-1 block px-3 py-1.5 rounded w-full bg-transparent focus:outline-none border border-yellow-500 text-slate-100 ${
                        errors.first_name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.first_name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-100"
                    >
                      LAST NAME
                    </label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      placeholder="Last Name"
                      className={`mt-1 block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none border border-yellow-500 text-slate-100 ${
                        errors.last_name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.last_name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100"
                  >
                    USERNAME
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Username"
                    className={`mt-1 block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none border border-yellow-500 text-slate-100 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-100"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`mt-1 block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none border border-yellow-500 text-slate-100 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-100"
                  >
                    PASSWORD
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      className={`block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none border border-yellow-500 text-slate-100 pr-10 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-100 hover:text-gray-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium text-gray-100"
                  >
                    CONFIRM PASSWORD
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      type={showConfirmPassword ? "text" : "password"}
                      className={`block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none border border-yellow-500 text-slate-100 pr-10 ${
                        errors.password_confirmation ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-100 hover:text-gray-300"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password_confirmation && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password_confirmation}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-start mb-2">
                <div className="flex mb-3">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-yellow-500 focus:outline-yellow-500  rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    By Signing up you are agree and accept our{" "}
                    <span className="text-fuchsia-500">Terms of Use</span>
                  </label>
                </div>
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-yellow-500 focus:outline-yellow-500  rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Send me the latest deal and offer
                  </label>
                </div>
              </div>
              {errors.signup && (
                <p className="mt-1 text-sm text-red-500">{errors.signup}</p>
              )}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing up..." : "SIGN UP"}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className="text-fuchsia-500 ">
                Already have an account?{" "}
                <Link href="/login" className="">
                  Login here.
                </Link>
              </span>
              <div className="border border-orange-300 mx-6 mt-1"></div>
            </div>
            <div className="mt-6">
              <div className="relative">
                {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-gray-100">or</span>
              </div> */}
              </div>
              <div className="mt-6 space-y-4">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <Globe className="h-5 w-5" />
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <Mail className="h-5 w-5" />
                  Continue with Facebook
                </button>
              </div>
            </div>
           
          
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center text-sm font-normal tracking-wide py-16 text-slate-300">
        <p>
          The product names, logos and brands used on this website are for
          identification purposes only. Registered Names and Trademarks are the
          copyright and property of their respective owners
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
