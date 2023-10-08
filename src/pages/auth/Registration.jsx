import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Layout from "./Layout";

const Registration = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout title="Create your account ">
      <Form btnLabel="Registration" handleSubmit={handleSubmit} />
      <p className="mt-10 text-center text-sm text-gray-500">
        If have an account...
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Login
        </Link>
      </p>
    </Layout>
  );
};

export default Registration;
