import React from "react";
import { useState} from "react";
import {useNavigate } from 'react-router-dom';
import Authservice from '../services/auth-service.js'

export const Userregister = () => {
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [home, setHome] = useState('');
    // const [Navigate, setNavigateto] = useState(false);
    const navigate = useNavigate();
           const submit=async(e)=>{
               e.preventDefault();

               try{
                  await Authservice.register(firstname, lastname, username,password, email, phone).then(
                    (data)=>{
                      console.log(data.token);
                      // setToken(data.token);
                      if(data.token){
                        navigate("/Home")
                      }
                      //navigate("/Home")
                    }
                  ,
                  (error)=>{
                    alert("Please Fill All The Fields");
                  }
                  );
               }catch(err){
                alert("Please Fill All The Fields");
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
                                            value={username} onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Password </label>
                                        <input className="form-control" type="password" placeholder="Enter your password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Email Address</label>
                                        <input type="email" className="form-control" placeholder="name@address.com"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label className="form-label"> Phone</label>
                                        <input type="tel" className="form-control" placeholder="Enter your phone no."
                                            value={phone} onChange={(e) => setPhone(e.target.value)}
                                        />
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