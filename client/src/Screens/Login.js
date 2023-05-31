import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UserInputs'
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

function Login() {
  return (
    <Layout>
        <div className='container  px-14 my-24 flex-colo'>
            <div className='w-full gap-8 2xl:w-2/5 p-14 md:w-3/5 bg-dry rounded-lg border border-border mx-14'>
                <img src='images/Logo.svg' alt="Logo" className='w-full h-12 object-contain' />

                <Input label="   Email___ " placeholder="moviemania@gmail.com" type="email" bg={true} />
                <Input label="Password" placeholder="******" type="password" bg={true} />

                <Link to="/homescreen" className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 mt-4 mx-14 rounded-lg w-80'>
                    <FiLogIn /> Sign In
                </Link>
                <p className='mx-14 mt-4 text-border'>
                    Don't have an account?{" "}
                    <Link to="/register" className='text-dryGray font-semibold ml-2'>
                        Sign Up
                    </Link>
                </p>

            </div>
        </div>
    </Layout>
  )
}

export default Login
