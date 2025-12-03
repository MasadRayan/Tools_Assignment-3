import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { motion } from 'framer-motion';
import { Link, ScrollRestoration, useLocation, useNavigate } from 'react-router';
import { FaArrowLeft, FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from 'axios';
import toast from 'react-hot-toast';


const Register = () => {
    const { createUser, signImWithGoogle, updateUser, setUser } = useAuth();
    const [showPass, setShowPass] = useState(false);
    const [profilePic, setProfilePic] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from || "/";

    useEffect(() => {
        document.title = "Register";
    }, []);


    const Feature = ({ icon, title, text }) => (
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xl">{icon}</span>
            </div>
            <div>
                <p className="font-medium">{title}</p>
                <p className="text-sm opacity-80">{text}</p>
            </div>
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { displayName: name, photoURL: profilePic };

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUser(userInfo);
                setUser({...user, displayName: name, photoURL: profilePic});
                toast.success('Registration successful');
                navigate(from, { replace: true });
                
            })
            .catch((error) => {
                toast.error('Registration failed');
                console.error(error);
            });
    };

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];

        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );

            // console.log('Uploaded image URL:', res.data.secure_url);
            setProfilePic(res.data.secure_url);
        } catch (error) {
            console.error("Cloudinary upload failed:", error);
        }
    };

    const handleGoogleSignIn = () => {
        signImWithGoogle()
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            toast.success('Registration successful');
            navigate(from, { replace: true });
        })
        .catch((error) => {
            toast.error('Registration failed');
            console.error(error);
        });
    }

    return (
        <div className="min-h-screen bg-[#EFECE3] flex mt-12 md:mt-20">
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />

                <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"
                    alt="Restaurant ambiance"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 flex flex-col justify-center p-12 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="font-display font-bold text-5xl mb-4">KhanaPina</h1>
                        <p className="text-lg  max-w-md ">
                            Experience culinary excellence. Join us for an unforgettable dining journey.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 space-y-4"
                    >
                        <Feature icon="🍽️" title="Exclusive Recipes" text="Access curated dishes from top chefs" />
                        <Feature icon="⭐" title="Save Favorites" text="Build your personal cookbook" />
                        <Feature icon="🎁" title="Member Rewards" text="Earn points on every order" />
                    </motion.div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
                <div className="p-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <FaArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="flex-1 flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-md"
                    >
                        <div className="lg:hidden text-center mb-8">
                            <h1 className="font-display font-bold text-5xl text-[#4A70A9]">KhanaPina</h1>
                            <p className="text-muted-foreground mt-2">Culinary Excellence</p>
                        </div>

                        <h2 className="text-5xl font-bold mb-2">Create an Account</h2>
                        <p className="font-semibold mb-6">Register to KhanaPina</p>

                        <div className='bg-base-100 card shadow-2xl '>
                            <form onSubmit={handleSubmit}>
                                <div className=" w-full shrink-0 ">
                                    <div className="card-body pb-0">
                                        <fieldset className="fieldset">
                                            <label className="label">Name</label>
                                            <input type="text" className="input w-full rounded-xl mt-1 mb-2" required placeholder="Your Name" name='name' />
                                            <label className="label">Your Photo</label>
                                            <input type="file" onChange={handleImageUpload} className="input w-full rounded-xl mt-1 mb-2" required name='photo' />
                                            <label className="label">Email</label>
                                            <input type="email" className="input w-full rounded-xl mt-1 mb-2" required placeholder="Your Email" name='email' />
                                            <label className="label">Password</label>
                                            <div className='relative'>
                                                <input
                                                    type={showPass ? 'text' : "password"}
                                                    className="input w-full rounded-xl mt-1 mb-2"
                                                    required
                                                    placeholder="Your password"
                                                    name='password' />
                                                <button onClick={() => setShowPass(!showPass)} type='button' className='btn btn-ghost btn-xs absolute top-3 right-3 md:right-3'>
                                                    {
                                                        showPass ? <FaEyeSlash /> : <FaEye />
                                                    }
                                                </button>
                                            </div>
                                            <div><a className="link link-hover">Forgot password?</a></div>
                                            <button type="submit" className="btn bg-[#4A70A9] text-white font-bold mx-auto mt-4 px-10  ">Register</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <p className="text-center my-2">Already have an account? <Link to="/login" className="text-[#4A70A9]">Sign in</Link></p>
                            </div>
                            <div className="divider mt-1 px-5 divider-neutral">OR</div>
                            <div className="flex justify-center items-center flex-col gap-3 mb-4" >
                                <button onClick={signImWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <button className="btn bg-black text-white border-black">
                                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                                    Login with GitHub
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};



export default Register;
