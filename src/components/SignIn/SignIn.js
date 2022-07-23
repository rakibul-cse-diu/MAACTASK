import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignIn } from '../../services/actions/signInAction';
import Loading from '../Loading/Loading';
import './SignIn.css';

const SignIn = () => {

    const userState = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");

    if (userState.isLoading) {
        return <Loading />
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        const data = {
            employeeId,
            password,
        }

        dispatch(userSignIn(data))

        console.log(userState.user.token);
    }

    if (userState.user.status === "success") {
        navigate('/dashboard/region')
    }


    return (
        <div className='py-16 signin-container flex flex-col justify-center items-center'>
            <div className='bg-primary shadow-xl w-1/2 py-14'>
                <h1 className='text-3xl font-bold text-accent text-center'>Welcome Back!</h1>
                <p className='text-base text-base-100 font-light text-center'>Please login to your account</p>
                <div className='px-16 flex flex-col justify-center items-center'>
                    <form onSubmit={handleSignIn} className='form-control'>
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setEmployeeId(e.target.value)} type="text" name="employeeId" id="employeeId" placeholder='Enter Your EmployeeId' required />
                        <input className='input bg-transparent border-0 rounded-none border-b-2 border-[#E1E1E1] text-accent mt-3 w-[400px]' onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password' required />
                        <input className='btn btn-secondary capitalize text-primary text-lg font-normal mt-3' type="submit" value="Sign In" />
                    </form>
                </div>
                <p className='text-base-100 mt-7 text-center'>Don’t have any account?? <Link to="/registration"><span className='text-secondary'>Sign Up</span></Link></p>
            </div>
        </div>
    );
};

export default SignIn;