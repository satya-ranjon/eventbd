import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SocialLogin from "./SocialLogin";

const Form = ({ btnLabel, handleSubmit, clearInput = false }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormData = (e) => {
    e.preventDefault();
    handleSubmit({ email, password });
  };

  useEffect(() => {
    if (clearInput) {
      setEmail("");
      clearInput("");
    }
  }, [clearInput]);
  return (
    <>
      <form
        onSubmit={handleFormData}
        className="space-y-6"
        action="#"
        method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {btnLabel ? btnLabel : "Sign in"}
          </button>
        </div>
      </form>

      <SocialLogin />
    </>
  );
};

Form.propTypes = {
  btnLabel: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  clearInput: PropTypes.bool,
};
export default Form;
