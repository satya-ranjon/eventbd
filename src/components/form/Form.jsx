import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SocialLogin from "./SocialLogin";
import { useLocation } from "react-router-dom";

const Form = ({ btnLabel, handleSubmit, success = false, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const { pathname } = useLocation();

  const handleFormData = (e) => {
    e.preventDefault();
    handleSubmit({ email, password, name, url });
  };

  useEffect(() => {
    if (success) {
      setEmail("");
      setPassword("");
      setName("");
      setUrl("");
    }
  }, [success]);
  return (
    <>
      <div className=" h-6 text-red-400">{error}</div>

      <form
        onSubmit={handleFormData}
        className="space-y-6"
        action="#"
        method="POST">
        {pathname == "/registration" && (
          <>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Name ( Optional )
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  id="name"
                  type="text"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="urlimg"
                className="block text-sm font-medium leading-6 text-gray-900">
                Img Url ( Optional )
              </label>
              <div className="mt-2">
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Image Url"
                  id="urlimg"
                  type="url"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </>
        )}

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              value={email}
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
              value={password}
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
  success: PropTypes.bool,
  error: PropTypes.string,
};
export default Form;
