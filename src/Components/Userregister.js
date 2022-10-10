import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Authservice from '../services/auth-service.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import validator from 'validator'

export const Userregister = () => {

    const diffToast = () => {

        if (firstname !== "" && lastname !== "" && username !== "" && password !== "" && email !== "" && phone !== "") {

            toast.info('Registration Hogaya !!', {

                position: "bottom-center",

                autoClose: 5000,

                hideProgressBar: false,

                closeOnClick: true,

                pauseOnHover: true,

                draggable: true,

                progress: 0.1,

            });

        }
    }

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [panelName, setpanelName] = useState("");
    const [skills, setskills] = useState("");
    const [emailError, setEmailError] = useState('')

    const [errorMessage, setErrorMessage] = useState('')
    const [phoneError, setPhoneError] = useState('')
    // const [home, setHome] = useState('');
    // const [Navigate, setNavigateto] = useState(false);
    const validateEmail = (e) => {

        const email = e.target.value

        setEmail(email)

        if (validator.isEmail(email)) {

            setEmailError('')

        }
        else {

            setEmailError('Enter valid Email!')

        }

    }

    const validatePassword = (e) => {

        const password = e.target.value

        setPassword(password)

        if (validator.isStrongPassword(password, {

            minLength: 8, minLowercase: 1,

            minUppercase: 1, minNumbers: 1, minSymbols: 1

        })) {

            setErrorMessage(' ')

        }

        else {

            setErrorMessage('Is Not Strong Password')

        }

    }

    const validatePhone = (e) => {

        const phone = e.target.value

        console.log(phone)

        setPhone(phone)

        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

        if ((e.target.value.match(phoneno))) {

            setPhoneError(' ')

        }

        else {

            setPhoneError('Mobile Number is not valid')

        }

    }


    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await Authservice.register(firstname, lastname, username, password, email, phone, skills).then(
                (data) => {
                    console.log(data.token);
                    // setToken(data.token);
                    if (data.token) {
                       // alert('Wow, Registration Successfull !')
                        console.log('success')
                        navigate("/")
                    }
                }

            );
        } catch (err) {
            alert("Please Fill All The Fields");
            console.log('fill all fields')
        }
    };


    return <main className="form-signin">

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet"
            type="text/css" />
        <link rel="stylesheet" href="./App.css" />


        <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image"></div>
        <div className="container">
            <div className="row">
                <div className="min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-10 col-xl-4 my-5">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center mb-3">Create your account</h2>
                                <div className="text-center mb-5">
                                    <small className="text-muted text-center">
                                        Already have an account? &nbsp;
                                        <a href="/" className="text-decoration-none">Sign in here</a>.
                                    </small>
                                </div>
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label"> First Name </label>
                                                <input type="text" className="form-control"
                                                    placeholder="Enter your first name"
                                                    value={firstname} onChange={(e) => setFirstName(e.target.value)} />

                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label"> Last Name </label>
                                                <input type="text" className="form-control"
                                                    placeholder="Enter your last name"
                                                    value={lastname} onChange={(e) => setLastName(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> User Name </label>
                                        <input type="text" className="form-control" placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />

                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Password </label>
                                        <input className="form-control" type="password" placeholder="Enter your password"
                                            value={password} onChange={(e) => validatePassword(e)} required />

                                        {errorMessage === '' ? null :

                                            <span class="focus-input100" style={{

                                                fontWeight: 'bold',

                                                color: 'red',

                                            }}>{errorMessage}</span>}

                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Email Address</label>
                                        <input type="email" className="form-control" placeholder="name@address.com"
                                            value={email} onChange={(e) => validateEmail(e)} required />

                                        <span class="focus-input100" style={{

                                            fontWeight: 'bold',

                                            color: 'red',

                                        }}>{emailError} </span>

                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Phone</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone no."
                                            value={phone} onChange={(e) => validatePhone(e)} required />

                                        <span class="focus-input100" style={{

                                            fontWeight: 'bold',

                                            color: 'red',

                                        }}>{phoneError} </span>

                                    </div>


                                    <div className="form-group mb-3">
                                        <label className="form-label"> Skills </label>
                                        <input type="text" className="form-control" placeholder="Java, React etc." value={skills} onChange={
                                            (e) => setskills(e.target.value)} />

                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                                    </div>

                                    <button className="btn btn-lg w-100 btn-primary mb-3" type="submit" onClick={diffToast}>
                                        <small>Create an account</small>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer

                position="bottom-center"

                autoClose={5000}

                hideProgressBar={false}

                newestOnTop={false}

                closeOnClick

                rtl={false}

                pauseOnFocusLoss

                draggable

                pauseOnHover

            />


        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossOrigin="anonymous"></script>
    </main>


}



