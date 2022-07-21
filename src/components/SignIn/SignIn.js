import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className='py-16 signin-container flex flex-col justify-center items-center'>
            <div className='bg-primary shadow-xl w-1/2 py-14'>
                <h1 className='text-3xl font-bold text-accent text-center'>Welcome Back!</h1>
                <p className='text-base text-base-100 font-light text-center'>Please login to your account</p>
                <div className='px-16 flex flex-col justify-center items-center'>
                    <form className='form-control '>
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="password" name="password" id="password" placeholder='Password' />
                        <input className='btn btn-secondary capitalize text-primary text-lg font-normal mt-3' type="submit" value="Sign In" />
                    </form>
                </div>
                <p className='text-base-100 mt-7 text-center'>Don’t have any account?? <Link to="/registration"><span className='text-secondary'>Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default SignIn;