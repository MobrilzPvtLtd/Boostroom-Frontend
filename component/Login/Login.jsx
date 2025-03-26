"use client";

import React, { use, useEffect, useState } from "react";
import { Mail, Globe, EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { axiosInstance } from "@/utils/axios";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get("authToken");
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token]);

  const loginUser = async (userData) => {
    try {
      const response = await axios.post("/api/login", userData);
      if (response.data) {
        return { success: true, data: response.data };
      } else {
        return {
          success: false,
          message: "Login failed. Please check your credentials.",
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await loginUser(formData);
        if (response.success) {
          login(response.data.user);
          router.push("/");
          e.target.reset();
        } else {
          setErrors({ login: response.message });
        }
      } catch (error) {
        setErrors({ login: error.message });
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
                  Welcome Back
                </h3>
                <h1 className="text-white text-4xl font-bold  mb-3">
                  Enter Into Account
                </h1>
                <p className="text-fuchsia-500 text-base">
                  Continue your journey with a wide range of our services
                </p>
              </div>
              <p className=" p-8 text-sm text-gray-300">
                © 2024 Mobrilz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] bg-dark-500/80 border-l-2 border-orange-300 shadow-xl flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md w-full mx-auto space-y-8 py-16">
            {/* <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Welcome back</h2>
          </div> */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
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
                    className={`mt-1 block w-full px-3 py-1.5 rounded bg-transparent  focus:outline-none border border-yellow-500 text-slate-100  ${
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
                      className={`block w-full px-3 py-1.5 rounded bg-transparent focus:outline-none  border border-yellow-500   text-white pr-10 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-white hover:text-gray-300"
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

                <div className="flex flex-col items-start justify-between">
                  <div className="flex  items-center mb-2">
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
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/forgot-password"
                      className="font-medium text-gray-300 hover:text-yellow-500 flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              </div>
              {errors.login && (
                <p className="mt-1 text-sm text-red-500">{errors.login}</p>
              )}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-gray-700 rounded-md shadow-sm text-md   font-medium text-black hover: bg-yellow-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Login..." : "LOGIN"}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center ">
              <span className="text-fuchsia-500 border-b-2 border-orange-300 ">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="">
                  Register here.
                </Link>
              </span>
              {/* <div className="border  mx-3"></div> */}
            </div>

            <div className="mt-6">
              <div className="relative">
                {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-gray-400">or</span>
              </div> */}
              </div>
              <div className="mt-6 space-y-4">
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <Globe className="h-5 w-5" />
                  Continue with Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                  <Mail className="h-5 w-5" />
                  Continue with Facebook
                </button>
              </div>
            </div>
            {/* <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <span
              className="font-medium text-cyan-500 cursor-pointer hover:text-cyan-400"
              onClick={() => {
                router.push('/signup');
              }}
            >
              Sign up
            </span>
          </p> */}
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

export default LoginForm;
