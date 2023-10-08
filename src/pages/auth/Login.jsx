import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "./Layout";

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout title="Login in to your account ">
      <Form btnLabel="Sign in" handleSubmit={handleSubmit} />
      <p className="mt-10 text-center text-sm text-gray-500">
        If you don't have an account...
        <Link
          to="/registration"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Create Account
        </Link>
      </p>
    </Layout>
  );
};

export default Login;
