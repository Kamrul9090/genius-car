import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { setAuthToken } from '../../api/Auth';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setAuthToken(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='text-center'>
            <h3 className='text-xl font-bold'>Or Sign Up with</h3>
            <div className='flex justify-center space-x-4 my-7'>
                <button className='border-2 border-orange-900'><FaFacebook className='w-10 h-10'></FaFacebook></button>
                <button onClick={handleGoogleSignIn}><FaGoogle className='w-10 h-10'></FaGoogle></button>
                <button>
                    <FaLinkedin className='w-10 h-10'></FaLinkedin>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;