import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './Registration.css';
import userSignUp from '../../services/actions/signUpAction';

const Registration = () => {
    const userState = useSelector(state => state.userRegister);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [employId, setEmployId] = useState("");
    const [password, setPassword] = useState("");
    const [confrimPassword, setConfrimPassword] = useState("");
    const [role, setRole] = useState("HUB");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [inputError, setInputError] = useState("");





    const handleSignUp = (e) => {
        e.preventDefault();

        const data = {
            name,
            email,
            employeeId: employId,
            password,
            passwordConfirm: confrimPassword,
            role,
            phoneNumber
        }

        if (password === confrimPassword) {
            dispatch(userSignUp(data))
            setInputError("")
        } else {
            setInputError("Password Does Not Match");
        }
        console.log(userState);
    }

    return (
        <div className='py-16 registration-container flex flex-col justify-center items-center'>
            <div className='bg-primary shadow-xl w-1/2 py-14'>
                <h1 className='text-3xl font-bold text-accent text-center'>Create Account</h1>
                <p className='text-base text-base-100 font-light text-center'>Fill in the details below to create an account</p>
                <div className='px-16 flex flex-col justify-center items-center'>
                    {
                        inputError && <p className='text-base font-normal text-error text-center'>{inputError}</p>
                    }
                    <form onSubmit={handleSignUp} className='form-control '>
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='Enter Your Full Name' required />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter Your Email' required />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setEmployId(e.target.value)} type="text" name="ID" id="ID" placeholder='Your ID' required />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setPhoneNumber(e.target.value)} type="text" name="number" id="number" placeholder='Your Mobile Number' />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' required />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setConfrimPassword(e.target.value)} type="password" name="confrimPassword" id="confrimPassword" placeholder='Confrim Password' required />
                        <label className='mt-2 text-sm text-base-100' htmlFor="role">Select Your Role</label>
                        <select onChange={(e) => setRole(e.target.value)} className="select bg-transparent text-accent border-2 border-[#E1E1E1] w-[400px] mt-3" id='role'>
                            <option defaultValue="HUB">HUB</option>
                        </select>
                        <label className="cursor-pointer label justify-start">
                            <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                            <span className="label-text text-base-100 ml-2">I read and agree to the <span className='text-secondary'>Terms & Conditions</span></span>
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