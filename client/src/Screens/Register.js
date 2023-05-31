import React,{Component} from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UserInputs'
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

// export default  Register extends Component{
//     constructor(props) {
//         super (props);
//         this.state={
//             fullName:"",
//             email:"",
//             password:"",
//         };
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const { fullName,email,password}=this.state;
//         console.log(fullName,email,password);
//     }
// }


function Register() {
    
    
  return (
    <Layout>
        <form>
        <div className='container  px-14 my-24 flex-colo'>
            <div className='w-full gap-8 2xl:w-2/5 p-14 md:w-3/5 bg-dry rounded-lg border border-border mx-14'>
                <img src='images/Logo.svg' alt="Logo" className='w-full h-12 object-contain' />

                <Input label="Full Name" placeholder="Enter Full Name" type="text" bg={true} />
                <Input label="Email___ " placeholder="Enter email address" type="email" bg={true} />
                <Input label="Password" placeholder="******" type="password" bg={true}/>

                <Link to="/" className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 mt-4 mx-14 rounded-lg w-80'>
                    <FiLogIn /> Sign Up
                </Link>
                <p className='mx-14 mt-4 text-border'>
                    Already have an account?{" "}
                    <Link to="/" className='text-dryGray font-semibold ml-2'>
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
        </form>
    </Layout>
  )
}

export default Register
