import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignInSignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnic: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to submit the data
     await axios.post("https://localhost:7008/api/UserRegistries", formData);
     alert("Success");

      navigate('/');
      // You can also show a success message or redirect the user after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle the error, show an error message, or take any other necessary action
    }
  };

  return (
    <>
    <Navbar/>
      <section className="row d-flex justify-content-center" style={{marginTop: "8%", width: "100%"}}>
    <div className="tab-content col-md-4 shadow-1-strong" style={{borderRadius: "10px"}}>
      <ul className="nav nav-pills nav-justified" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
            aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
            aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
      </ul>
 
      <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
          </div>

          <p className="text-center">or:</p>

        
          <div className="form-outline mb-4">
            <input type="email" id="loginName" className="form-control" />
            <label className="form-label" for="loginName">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="loginPassword" className="form-control" />
            <label className="form-label" for="loginPassword">Password</label>
          </div>

          
          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
             
              <div className="form-check mb-3 mb-md-0">
                <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                <label className="form-check-label" for="loginCheck"> Remember me </label>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
          
              <a href="/rest">Forgot password?</a>
            </div>
          </div>
<a href='/dash1'>
       
          <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

          </a>
          <div className="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
        </form>
      </div>
      <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
          </div>

          <p className="text-center">or:</p>


          <div>
            <label className="form-label" htmlFor="name">Name </label>
            <input 
            className="form-control" 
            type="text" 
            id="name"
            name='name'
            value={formData.name}
            onChange={handleChange} 
            placeholder="Name as per CNIC"
            />
          </div>

          {/* <div className="form-outline mb-4">
            <input type="text" id="registerName" className="form-control" />
            <label className="form-label" for="registerName">Name</label>
          </div> */}

          <div>
            <label className="form-label" htmlFor="cnic">CNIC </label>
            <input
            className="form-control" 
            type="text" 
            id="cnic"
            name='cnic'
            value={formData.cnic}
            onChange={handleChange} 
            placeholder="CNIC"
            />
          </div>


          {/* <div className="form-outline mb-4">
            <input type="text" id="registercnic" className="form-control" />
            <label className="form-label" for="registercnic">CNIC</label>
          </div> */}


          <div>
            <label className="form-label" htmlFor="email">Email </label>
            <input
            className="form-control" 
            type="email" 
            id="email"
            name='email'
            value={formData.email}
            onChange={handleChange} 
            placeholder="Enter Email here"
            />
          </div>


          {/* <div className="form-outline mb-4">
            <input type="email" id="registerEmail" className="form-control" />
            <label className="form-label" for="registerEmail">Email</label>
          </div> */}

          <div>
            <label className="form-label" htmlFor="password">Password </label>
            <input
            className="form-control" 
            type="password" 
            id="password"
            name='password'
            value={formData.password}
            onChange={handleChange} 
            placeholder="Password"
            />
          </div>

          {/* <div className="form-outline mb-4">
            <input type="password" id="registerPassword" className="form-control" />
            <label className="form-label" for="registerPassword">Password</label>
          </div> */}

        
          {/* <div className="form-check d-flex justify-content-center mb-4">
            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck"
              aria-describedby="registerCheckHelpText" />
            <label className="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div> */}
       
          <button type="submit" className="btn btn-primary btn-block mb-3 mt-4" >Sign Up</button>
        </form>
      </div>
    </div>
  </section>

  <script type="text/javascript" src="js/mdb.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>

    </>
  )
}
export default SignInSignUpPage;

