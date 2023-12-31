import React, { useState } from 'react'
import AuthenticationComponent from '../../Components/AuthenticationComponent'
import InputField from '../../Components/Shared/InputField'

import { BiAt } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoPersonCircleSharp } from "react-icons/io5"
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, createCustomer, createProvider } from '../../Store/userSlice';

const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [role, setRole] = useState('');

  const [errors, setErrors] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPwd: '',
    role: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);

  const handleSignup = async (e) => {
    e.preventDefault();

    setErrors({
      fullName: '',
      username: '',
      password: '',
      confirmPwd: '',
      role: ''
    });

    let hasErrors = false;

    if (!fullName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: 'Please enter your full name!'
      }));
      hasErrors = true;
    }

    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Please enter your username!'
      }));
      hasErrors = true;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Please enter your password!'
      }));
      hasErrors = true;
    }

    if (password !== confirmPwd) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPwd: 'Passwords do not match!'
      }));
      hasErrors = true;
    }

    if (!role) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        role: 'Please choose a role!'
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const customerCredentials = {
      customerName: fullName,
      user: {
        avatarURL: "https://static.vecteezy.com/system/resources/previews/000/585/470/non_2x/bird-and-wing-logo-vector-template.jpg",
        fullname: fullName,
        username,
        password,
        email: "string",
        dob: "2023-10-24T15:32:59.180Z",
        phoneNumber: 0,
        // createdAt: "2023-10-27T01:49:10.663Z",
        gender: "string",
        image: "string",
        role: 0
      }
    };

    const providerCredentials = {
      providerName: fullName,
      rating: 0,
      destination: "string",
      description: "string",
      user: {
        avatarURL: "https://static.vecteezy.com/system/resources/previews/000/585/470/non_2x/bird-and-wing-logo-vector-template.jpg",
        fullname: fullName,
        username,
        password,
        email: "string",
        dob: "2023-10-24T15:32:59.180Z",
        phoneNumber: 0,
        gender: "string",
        image: "string",
        role: 1
      }
    }

    const userCredentials = {
      username,
      password
    }

    const userToCreate = parseInt(role) === 0 ? customerCredentials : providerCredentials;

    dispatch(parseInt(role) === 0 ? createCustomer(userToCreate) : createProvider(userToCreate))
      .unwrap()
      .then((result) => {
        if (result?.status === 200 || result?.status === 201) {
          dispatch(loginUser(userCredentials)).then((resultLogin) => {
            navigate('/');
          });
        }
      });

  };

  return (
    <AuthenticationComponent>
      <div className='content'>
        <h3>Create account</h3>
        <form className="login__form-content" onSubmit={handleSignup}>

          <InputField
            icon={IoPersonCircleSharp}
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            label="Fullname"
            error={errors.fullName}
          />

          <InputField
            icon={BiAt}
            type="text"
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
            error={errors.username}
          />

          <InputField
            icon={RiLockPasswordFill}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            error={errors.password}
          />

          <InputField
            icon={RiLockPasswordFill}
            type="password"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
            label="Confirm Password"
            error={errors.confirmPwd}
          />

          <div className='dropdown'>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Choose option: Customer or Provider</option>
              <option value="0">Customer</option>
              <option value="1">Provider</option>
            </select>
          </div>

          {errors.role && <span className="text-red-600">{errors.role}</span>}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-full mt-1 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <button type="submit" className='btn-login'>{loading ? 'Loading ...' : 'Sign up'}</button>

          <p className='text'>Already have an account?
            <Link to='/login' className="text-swap" > Log in</Link>
          </p>
        </form>
      </div>
    </AuthenticationComponent>
  )
}

export default RegisterPage