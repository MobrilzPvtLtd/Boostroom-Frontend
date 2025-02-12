import React from "react";
import Image from "next/image";

function Login() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 p-6">
          {/* Logo Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-64 md:w-80 lg:w-96 mb-8">
              <div className="aspect-square relative">
                <Image
                  src="/image/boostroom.png"
                  alt="Description of image"
                  width={500}
                  height={300}
                />
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
                  MASTERLOOT
                </h1>
                <p className="text-emerald-400 text-center text-sm md:text-base">
                  EXCELLENCE WINS
                </p>
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Admin Panel
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="email"
                    id="username"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="admin@boostroom.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-200"
                  >
                    Remember Me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors duration-200"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
