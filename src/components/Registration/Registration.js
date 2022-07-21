import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div className='py-16 registration-container flex flex-col justify-center items-center'>
            <div className='bg-primary shadow-xl w-1/2 py-14'>
                <h1 className='text-3xl font-bold text-accent text-center'>Create Account</h1>
                <p className='text-base text-base-100 font-light text-center'>Fill in the details below to create an account</p>
                <div className='px-16 flex flex-col justify-center items-center'>
                    <form className='form-control '>
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="text" name="name" id="name" placeholder='Enter Your Full Name' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="text" name="ID" id="ID" placeholder='Your ID' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="tel" name="number" id="number" placeholder='Your Mobile Number' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="password" name="password" id="password" placeholder='Password' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' type="password" name="confrimPassword" id="confrimPassword" placeholder='Confrim Password' />
                        <label className='mt-2 text-sm text-base-100' htmlFor="role">Select Your Role</label>
                        <select class="select bg-transparent text-accent border-2 border-[#E1E1E1] w-[400px] mt-3" id='role'>
                            <option selected>HUB</option>
                        </select>
                        <label class="cursor-pointer label justify-start">
                            <input type="checkbox" checked={false && `checked`} class="checkbox checkbox-accent" />
                            <span class="label-text text-base-100 ml-2">I read and agree to the <span className='text-secondary'>Terms & Conditions</span></span>
                        </label>
                        <input className='btn btn-secondary capitalize text-primary text-lg font-normal mt-3' type="submit" value="Create Account" />
                    </form>
                </div>
                <p className='text-base-100 mt-7 text-center'>Already have an account? <Link to="/signin"><span className='text-secondary'>Sign In</span></Link></p>
            </div>
        </div>
    );
};

export default Registration;