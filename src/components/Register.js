import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                console.log(user);
            })
            .catch(e => {
                console.error(e.message)
            })

    }

    const handleGoogleSignIN = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-12">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already Have An Account ?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIN} className="btn btn-outline btn-success">GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;