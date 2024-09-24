import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CButton from '../../components/CButton';
import CInputLabel from '../../components/CInputLabel';

export default function FormSignIn({
  isLoading,
  handleSubmit,
  valueEmail,
  valuePassword,
  onChange,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-5"
    >
      <div className="w-full md:w-[345px]">
        <CInputLabel
          htmlFor="email-address"
          label="Email address"
          name="email"
          type="email"
          value={valueEmail}
          className="w-full text-input mt-3"
          classNameLabel="text-colorgray"
          placeholder="Email address"
          onChange={onChange}
        />
      </div>
      <div className="w-full md:w-[345px]">
        <CInputLabel
          htmlFor="password"
          label="Password"
          name="password"
          type="password"
          value={valuePassword}
          className="w-full text-input mt-3"
          classNameLabel="text-colorgray"
          placeholder="Password"
          onChange={onChange}
        />
      </div>
      <CButton
        type="submit"
        className="bg-zinc-800 hover:bg-black px-5 py-2 text-center text-white rounded-lg"
        loading={isLoading}
        disabled={isLoading}
      >
        Sign In
      </CButton>
      <p className="text-colorgray mt-20">
        Don&quot;t have an account?
        <Link to="/signup" className="font-semibold text-black underline">
          Sign Up
        </Link>
      </p>
      <Link to="/" className="hover:underline">
        {`< Back`}
      </Link>
    </form>
  );
}

FormSignIn.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChange: PropTypes.func,
};
