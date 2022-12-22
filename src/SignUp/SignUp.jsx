import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../src/assets/images/login/login.svg'
import { setAuthToken } from '../api/Auth';
import { AuthContext } from '../contexts/AuthProvider';
const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [currentUser, setCurrentUser] = useState({
        email: '',
        password: '',
        confirm: '',
    });
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        confirmError: '',
    })

    const handleSignUp = e => {
        e.preventDefault()
        createUser(currentUser.email, currentUser.password)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
                e.target.email.value = '';
                e.target.password.value = '';
                e.target.confirm.value = '';
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleEmail = e => {
        const email = e.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setCurrentUser({ ...currentUser, email: '' })
            setErrors({ ...errors, emailError: 'Your password is invalid' })
        } else {
            setCurrentUser({ ...currentUser, email: email })
            setErrors({ ...errors, emailError: '' })
        }
    }

    const handlePassword = e => {
        const password = e.target.value;
        if (password.length < 6) {
            setCurrentUser({ ...currentUser, password: '' })
            setErrors({ ...errors, passwordError: 'Your password should be 6 characters' });
        } else {
            setCurrentUser({ ...currentUser, password: password })
            setErrors({ ...errors, passwordError: '' });

        }
    }

    const handleConfirm = e => {
        const confirm = e.target.value;
        if (currentUser.password !== confirm) {
            setCurrentUser({ ...currentUser, confirm: '' })
            setErrors({ errors, confirmError: 'Your password not match' })
        } else {
            setCurrentUser({ ...currentUser, confirm: confirm })
            setErrors({ errors, confirmError: '' })

        }
    }
    console.log(currentUser);
    return (
        <div className="hero">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-center">SignUp</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleEmail} type="text" name='email' placeholder="email" className="input input-bordered" required />
                            <div>
                                {
                                    errors?.emailError && <p className='text-orange-700 font-semibold'><small>{errors.emailError}</small></p>
                                }
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onChange={handlePassword} type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div>
                                {
                                    errors?.passwordError && <p className='text-orange-700 font-semibold'><small>{errors.passwordError}</small></p>
                                }
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input onChange={handleConfirm} type="password" name='confirm' placeholder="confirm password" className="input input-bordered" required />
                            <div>
                                {
                                    errors?.confirmError && <p className='text-orange-700 font-semibold'><small>{errors.confirmError}</small></p>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn border-none bg-orange-700" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='font-bold'>Already have an account?<Link className='text-orange-700 ml-2' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;