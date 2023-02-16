"use client";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <li className='list-none'>
      <button
        onClick={() => signIn()}
        className='bg-gray-700 text-sm rounded text-white  p-2'
      >
        Sign In
      </button>
    </li>
  );
};

export default Login;
