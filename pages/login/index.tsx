import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .max(20, "Email can not be longer than 20 characters")
          .required("Required"),
        password: Yup.string()
          .min(6, "Password must be longer than 6 characters")
          .required("Required"),
      }),
      onSubmit: ({ email, password }) => {
        alert(`Login: ${email}, password: ${password}`);
      },
    });

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">Login</div>
        <div className="text-3xl font-bold text-gray-500 mt-2 text-center">
          Try to login
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {touched.email && errors.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-900 block"
              >
                Password
              </label>
              <input
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {touched.password && errors.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-300 rounded"
                />
                <label htmlFor="" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div>
                <a href="" className="font-medium text-sm text-blue-500">
                  Forgot Password
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
