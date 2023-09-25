import React, { useState } from 'react';
import AuthenticationComponent from '../../Components/AuthenticationComponent';
import ForgotPasswordComponent from '../../Components/ForgotPasswordComponent';
import { BiAt } from 'react-icons/bi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import './style.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Store/userSlice';
import { validateEmail } from '../../Utils';

const LoginPage = () => {
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Redux state
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({ email: '', password: '' });

    // Validation
    let hasErrors = false;
    if (!email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter your email!' }));
      hasErrors = true;
    } else if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email!' }));
      hasErrors = true;
    }

    if (!password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Please enter your password!' }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    const userCredentials = { email, password };

    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/');
      }
    });
  };

  return (
    <AuthenticationComponent>
      <div className="content">
        <h3>Welcome Back!</h3>
        <form className="login__form-content" onSubmit={handleLogin}>
          <div className={`input-box ${errors.email ? 'error-input' : ''}`}>
            <BiAt />
            <input
              type="text"
              className='input'
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Email address</label>
          </div>

          {errors.email && <span className="text-red-600">{errors.email}</span>}

          <div className={`input-box ${errors.password ? 'error-input' : ''}`}>
            <RiLockPasswordFill />
            <input
              type="password"
              className="input"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="">Password</label>
          </div>

          {errors.password && <span className="text-red-600">{errors.password}</span>}

          <div className="password-feature">
            <div className="remember">
              <input type="checkbox" id="remember"></input>
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="forgot" onClick={() => setShowForgotPasswordModal(true)}>
              Forgot password?
            </div>

            {showForgotPasswordModal ? (
              <ForgotPasswordComponent onClose={() => setShowForgotPasswordModal(false)} />
            ) : (
              <></>
            )}
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 w-full mt-1 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <button className="btn-login">{loading ? 'Loading ...' : 'Sign in'}</button>

          <div className="btn-login btn-login-google">
            <FcGoogle />
            <p>Sign in with Google</p>
          </div>

          <p className="text">
            Don't have an account?
            <Link to="/register" className="text-swap">
              {' '}
              Register
            </Link>
          </p>
        </form>
      </div>
    </AuthenticationComponent>
  );
};

export default LoginPage;
