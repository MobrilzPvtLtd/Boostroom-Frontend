"use client"

import React, { useState } from 'react';
import { Mail, Globe, EyeOff, Eye } from 'lucide-react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';  
import Cookies from 'universal-cookie';
import { axiosInstance } from '@/utils/axios';
import { useAuth } from '@/context/AuthContext';

const LoginForm = () => {
  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get('authToken');
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  if(token) {
    router.push('/')
  }

  const loginUser = async (userData) => {
    try {
      const response = await axiosInstance.post('/login', userData);
      if (response.data) {
        return { success: true, data: response.data };
      } else {
        return { success: false, message: 'Login failed. Please check your credentials.' };
      }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'An error occurred. Please try again.' };
    }
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
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
          login(response.data.authToken, response.data.user);
          router.push('/');
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
    <div className="w-full flex">
      <div className="w-[16%] h-[100vh] overflow-auto custom-scrollbar">
        <Sidebar />
      </div>
      <div className="w-[84%] h-[100vh] overflow-auto custom-scrollbar">
        <Header />
        <div className="min-h-screen flex mt-10 bg-[#042634] px-28 py-16">
          <div className="hidden lg:block shadow-xl lg:w-1/2">
            <div className="h-full relative bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500">
              <div className="absolute inset-0 bg-black/20">
                <Image
                  src="/image/bgsignup.png"
                  alt="game"
                  className="absolute top-0 left-0 h-full w-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#031D27] shadow-xl flex flex-col justify-center px-8 lg:px-16">
            <div className="max-w-md w-full mx-auto space-y-8 py-8">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">Welcome back</h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`mt-1 block w-full px-3 py-1.5 rounded bg-gray-800 border-transparent focus:border-cyan-500 focus:bg-gray-900 focus:ring-0 text-white ${
                        errors.email ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                      Password
                    </label>
                    <div className="mt-1 relative">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        className={`block w-full px-3 py-1.5 rounded bg-gray-800 border-transparent focus:border-cyan-500 focus:bg-gray-900 focus:ring-0 text-white pr-10 ${
                          errors.password ? 'border-red-500' : ''
                        }`}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                  </div>
                </div>
                {errors.login && <p className="mt-1 text-sm text-red-500">{errors.login}</p>}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Login...' : 'Login'}
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-900 text-gray-400">or</span>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <Globe className="h-5 w-5" />
                    Continue with Google
                  </button>
                  <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <Mail className="h-5 w-5" />
                    Continue with Facebook
                  </button>
                </div>
              </div>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{' '}
                <span
                  className="font-medium text-cyan-500 cursor-pointer hover:text-cyan-400"
                  onClick={() => {
                    router.push('/signup');
                  }}
                >
                  Sign up
                </span>
              </p>
              <p className="text-center text-sm text-gray-500">© 2024 Mobrilz. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;








