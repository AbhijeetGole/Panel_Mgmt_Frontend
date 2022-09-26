import {React,useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Assets/userlogin.module.css";
import Authservice from '../services/auth-service.js'
import Home from './Home';
 // class Userlogin extends React.Component 
 const Userlogin=({setToken})=>
  {
      
           const [username,setUsername] =useState("")
           const [password,setPassword] =useState("")
           const navigate = useNavigate() 
           const handleLogin=async(e)=>{
               e.preventDefault();
               try{
                  await Authservice.login(username,password).then(
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
                    alert("Wrong Username or Password");
                  }
                  );
               }catch(err){
                alert("Wrong Username or Password");
               }
           };
          
            return (
              <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title />
                <meta name="description" content />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="//db.onlinewebfonts.com/c/bb018e64d01355748d8ddc53553850b9?family=Cerebri+Sans" rel="stylesheet" type="text/css" />
                <link rel="stylesheet" href="/styles/styles.css" />
                <link rel="stylesheet" href="./user-login.css" />
                <div className="position-fixed top-0 end-0 start-0 bg-img-start bg-image">
                  <div className="container">
                    <div className="row">
                      <div className="min-vh-100 d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-8 col-xl-4 my-5">
                          <div className="card">
                            <div className="card-body">
                              
                              <h2 className="text-center mb-3">Sign in</h2>
                              <div className="text-center mb-5">
                                <small className="text-muted text-center">
                                  Don't have an account yet?
                                  <Link to="/Userregister" className="text-decoration-none">
                                    Sign up
                                  </Link>
                                </small>
                              </div>
                              <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                  <label className="form-label" > User Name </label>
                                  <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={
                                        (e)=> setUsername(e.target.value)
                                  }/>
                                </div>
                                
                                <div className="form-group mb-3">
                                  <div className="row">
                                    <div className="col">
                                      <label className="form-label"> Password </label>
                                    </div>
                                    <div className="col-auto text-muted">
                                      <a href="password-reset-cover.html" className="small text-decoration-none">
                                        Forgot password?
                                      </a>
                                    </div>
                                  </div>
                                  <div className="input-group input-group-merge">
                                    <input className="form-control" type="password" placeholder="Enter your password" 
                                    value={password} onChange={
                                     (e)=> setPassword(e.target.value)}/>
                                  </div>
                                </div>
                                <button className="btn btn-lg w-100 btn-primary mb-3">
                                  <small>Sign in</small>
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div></div>
            );
      
  }


export default Userlogin;