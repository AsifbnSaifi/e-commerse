import React from "react";

const Register = () => {
  return (
    <>
      <div className="w-full bg-grey-lightest pt-14">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto bg-gray-100 rounded shadow">
            <form className="space-y-4 md:space-y-6" action="">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Register for an Account
              </div>
              <div className="py-4 px-8">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      UserName
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      name="username"
                      id="name"
                      type="text"
                      placeholder="Name"
                      autoComplete=""
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    autoComplete=""
                    id="E-mail"
                    type="email"
                    name="email"
                    placeholder="Your E-mail Address"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="input block border border-gray-300 focus:border-pitch-black py-3 px-3 w-full focus:outline-none "
                      placeholder="Enter Password"
                      name="password"
                      id="pass"
                      autoComplete=""
                    />
                    <div className="flex space-x-1">
                      <input type="checkbox" />
                      <p>Show Password</p>
                    </div>
                  </div>
                  <p className="text-xs mt-1 text-red-600">
                    At least 4 characters
                  </p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white hover:text-black font-bold py-2 px-4 rounded-full"
                    type="submit"
                  >
                    Save
                  </button>
                  <p className="text-center my-4">
                    I already have an account
                    <button className="text-black hover:underline lg:ml-1 cursor-pointer text-sm font-bold">
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Register;
