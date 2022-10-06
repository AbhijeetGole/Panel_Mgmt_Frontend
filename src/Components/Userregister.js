import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Authservice from '../services/auth-service.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';




export const Userregister = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [panelName, setpanelName] = useState("");
    const [skills, setskills] = useState("");
    // const [home, setHome] = useState('');
    // const [Navigate, setNavigateto] = useState(false);
    const navigate = useNavigate();
    const submit = async (e) => {
        e.preventDefault();

        try {
            await Authservice.register(firstname, lastname, username, password, email, phone, panelName, skills).then(
                (data) => {
                    console.log(data.token);
                    // setToken(data.token);
                    if (data.token) {
                        alert('Wow, Registration Successfull !')
                        console.log('success')
                        navigate("/Home")
                    }
                    //navigate("/Home")
                }
                ,
                (error) => {
                    //alert("Please Fill All The Fields");
                    //toast.error('Please fill all fields')
                    console.log('fill all fields')
                }
            );
        } catch (err) {
            //alert("Please Fill All The Fields");
            console.log('fill all fields')
        }
    };


    // this.submit = this.submit.bind(this);
    // console.log('submit')
    // e.preventDefault();
    // let result = await fetch("http://localhost:8080/user/register",{
    //     method : 'POST',
    //     body : JSON.stringify({firstName,lastName,userName,password,email,phone}),
    //     headers:{
    //         'Content-Type' : 'application/json'
    //     }
    // });
    // result = await result.json();


    // if (navigate) {

    // }

    return <main className="form-signin">

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />

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
                                        Already have an account?
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
                                                    value={firstname} {...register("firstname", {
                                                        required: "first Name is Required"
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("firstname");
                                                    }} onChange={(e) => setFirstName(e.target.value)} />
                                                {errors.firstname && (
                                                    <small className="text-danger">{errors.firstname.message}</small>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label"> Last Name </label>
                                                <input type="text" className="form-control"
                                                    placeholder="Enter your last name"
                                                    value={lastname}  {...register("lastname", {
                                                        required: "last Name is Required"
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("lastname");
                                                    }} onChange={(e) => setLastName(e.target.value)}
                                                />
                                                {errors.lastname && (
                                                    <small className="text-danger">{errors.lastname.message}</small>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> User Name </label>
                                        <input type="text" className="form-control" placeholder="Enter your username"
                                            value={username} {...register("username", {
                                                required: "User Name is Required",
                                                minLength: {
                                                    value: 5,
                                                    message: "Enter a minimum of 5 characters",
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "Max 10 chars are allowed",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("username");
                                            }}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        {errors.username && (
                                            <small className="text-danger">{errors.username.message}</small>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Password </label>
                                        <input className="form-control" type="password" placeholder="Enter your password"
                                            value={password} {...register("password", {
                                                required: "Password is Required", pattern:
                                                {
                                                    value:/^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                                    message: " Must use a capital and special character ",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("password");
                                            }} onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.password && (
                                            <small className="text-danger">{errors.password.message}</small>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Email Address</label>
                                        <input type="email" className="form-control" placeholder="name@address.com"
                                            value={email}  {...register("email", {
                                                required: "Email is Required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@zensar+\.[A-Z]{2,}$/i,
                                                    message: "Domain should only contain zensar.com",
                                                }
                                            })} onKeyUp={() => {
                                                trigger("email");
                                            }} onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errors.email && (
                                            <small className="text-danger">{errors.email.message}</small>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Phone</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone no."
                                            value={phone}   {...register("phone", {
                                                required: "Phone is Required",
                                                pattern: {
                                                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                    message: "Invalid phone no",
                                                }
                                            })}
                                            onKeyUp={() => {
                                                trigger("phone");
                                            }} onChange={(e) => setPhone(e.target.value)}
                                        />
                                        {errors.phone && (
                                            <small className="text-danger">{errors.phone.message}</small>
                                        )}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Panel Name </label>
                                        <input type="text" className="form-control" placeholder="Enter panel name" value={panelName} {...register("panelName", {
                                            required: "Panel Name is Required"
                                        })}
                                            onKeyUp={() => {
                                                trigger("panelName");
                                            }} onChange={
                                                (e) => setpanelName(e.target.value)} />
                                        {errors.panelName && (
                                            <small className="text-danger">{errors.panelName.message}</small>
                                        )}
                                        {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select"/> */}
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Skills </label>
                                        <input type="text" className="form-control" placeholder="Java, React etc." value={skills} {...register("skills", {
                                            required: "skills are Required"
                                        })}
                                            onKeyUp={() => {
                                                trigger("skills");
                                            }} onChange={
                                                (e) => setskills(e.target.value)} />
                                        {errors.skills && (
                                            <small className="text-danger">{errors.skills.message}</small>
                                        )}
                                    </div>

                                    <div className="form-check form-switch mb-3">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Active</label>
                                    </div>

                                    <button className="btn btn-lg w-100 btn-primary mb-3" type="submit" onClick={submit}>
                                        <small>Create an account</small>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossOrigin="anonymous"></script>
    </main>


}


