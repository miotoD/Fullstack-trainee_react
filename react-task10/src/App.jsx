import { useState } from "react";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (data) => {
    alert("Form submitted!");
    console.log(data);
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white border-[2px] shadow-xl w-full max-w-md p-8 rounded-lg"
      >
        <h1 className="text-red-500 text-3xl font-semibold text-center mb-6">
          Fill in the Form
        </h1>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            className={`h-10 border-2 rounded-md w-full px-3 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={
              errors.firstName
                ? errors.firstName.message
                : "Enter your Firstname"
            }
            {...register("firstName", { required: "FirstName required!" })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            className={`h-10 border-2 rounded-md w-full px-3 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.LastName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={
              errors.LastName ? errors.LastName.message : "Enter your Lastname"
            }
            {...register("LastName", { required: "LastName Required!" })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Email
          </label>
          <input
            type="email"
            className={`h-10 border-2 rounded-md w-full px-3 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.Email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={
              errors.Email ? errors.Email.message : "Enter your email"
            }
            {...register("Email", { required: "Email required!" })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Password
          </label>
          <input
            type="password"
            className={`h-10 border-2 rounded-md w-full px-3 focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
            {...register("password", {
              required: "Password cannot be empty",
              minLength: {
                value: 8,
                message:
                  "Password must be greater than 8 characters to be strong.",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
