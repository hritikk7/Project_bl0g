import React, { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputCred = (e) => {
    console.log(e.target.value);
    ///////long metod/////////
    // if (e.target.id == "login-name") {
    //   setUserData({ ...userData, name: e.target.value });
    // } else if (e.target.id == "login-email") {
    //   setUserData({ ...userData, email: e.target.value });
    // } else if (e.target.id == "login-password") {
    //   setUserData({ ...userData, password: e.target.value });
    // } else {
    //   setUserData({ ...userData, confirmPassword: e.target.value });
    // }

    /////shortcut///////
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <div class="flex flex-wrap">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p class="text-left text-3xl font-bold">Welcome back, </p>
          <p class="mt-2 text-left text-gray-500">
            Welcome, please enter your details for registration.
          </p>
          <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
            <img
              class="mr-2 h-5"
              src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
              alt
            />{" "}
            Log in with Google
          </button>
          <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
              or
            </div>
          </div>
          <form class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="text"
                  id="login-name"
                  name="name"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                  onChange={handleInputCred}
                />
              </div>
            </div>

            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                  onChange={handleInputCred}
                />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  onChange={handleInputCred}
                />
              </div>
            </div>

            <div class="mb-12 flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Confirm password"
                  onChange={handleInputCred}
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              onClick={handleLogin}
            >
              Register
            </button>
          </form>
          <div class="py-12 text-center">
            <p class="whitespace-nowrap text-gray-600">
              Already have an account?
              <Link
                to={`/login`}
                class="underline-offset-4 font-semibold text-gray-900 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div class="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p class="mb-8 text-3xl font-semibold leading-10">
            "Critically, it is not just the quantity of social interaction that
            matters, but its quality. It is not just the quantity of news
            consumption that matters, but its quality."
          </p>
          <p class="mb-4 text-3xl font-semibold">- Neil Postman</p>
          <p class="">Made in India </p>
          <p class="mb-7 text-sm opacity-70">By Ritik</p>
        </div>
        <img
          class="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  );
}

export default Register;
