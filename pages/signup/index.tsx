import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  // const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
  // useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //   firstName: Yup.string()
  //     .max(10, "Must be 15 characters or less")
  //     .required("Required"),
  //   lastName: Yup.string()
  //     .max(20, "Must be 20 characters or less")
  //     .required("Required"),
  //   email: Yup.string()
  //     .email("Email is invalid")
  //     .required("Email is required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), null], "Password must match")
  //     .required("Conform password if required."),
  // }),
  // onSubmit={()}

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-20 rounded shadow-2xl w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Create Your Account
        </h2>
        <form className="space-y-5">
          <div className="">
            <label className="mr-2 font-bold text-gray-500">Firstname</label>
            <input
              type="text"
              className="w-full border-2 block border-gray-200 p-1 rounded outline-none focus:border-blue-500"
            />
          </div>
          <div className="">
            <label className="mr-2 font-bold text-gray-500">Lastname</label>
            <input
              type="text"
              className="w-full border-2 block border-gray-200 p-1 rounded outline-none focus:border-blue-500"
            />
          </div>
          <div className="">
            <label className="mr-2 font-bold text-gray-500">Email</label>
            <input
              type="email"
              className="w-full border-2 block border-gray-200 p-1 rounded outline-none focus:border-blue-500"
            />
          </div>
          <div className="">
            <label className="mr-2 font-bold text-gray-500">Password</label>
            <input
              type="password"
              className="w-full border-2 block border-gray-200 p-1 rounded outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" />
            <label className="ml-2 text-gray-700 text-sm">
              I agree to the terms and privacy
            </label>
          </div>
          <button className="block w-full p-4 rounded bg-yellow-300 hover:bg-yellow-400 text-purple-900">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
