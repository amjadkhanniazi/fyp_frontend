import React from 'react'
import { useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top h-20" >

      <div className="container-fluid">

        {/* <div className="navbar-brand" href="dhttps://mdbootstrap.com/docs/stanard/" >
          Social Welfare
        </div> */}
        <div className="navbar-brand"  >
          Social Welfare
        </div>

        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"

          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">

          <i className="fas fa-bars"></i>

        </button>

        <div className="collapse navbar-collapse" id="navbarExample01" style={{ marginLeft: "38%" }}>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item active">

              <div className="nav-link mx-2 Pointer" aria-current="page" onClick={() => navigate("/")} >Home</div>

            </li>

            <li className="nav-item">

              <div className="nav-link mx-2 Pointer" onClick={() => navigate("/volunteer")}

              >Voolunteer</div>

            </li>

            <li className="nav-item">

              <div className="nav-link mx-2 Pointer" onClick={() => navigate("/middlepage")} >Cases</div>

            </li>

            <li className="nav-item">

              <div className="nav-link mx-2 Pointer" onClick={() => navigate("/allevents")} >Events</div>

            </li>

            <li className="nav-item">

              <div className="nav-link Pointer" onClick={() => navigate("/apprules")} >Apply Now</div>

            </li>

            <li className="nav-item">

              <div className="nav-link mx-2 Pointer" onClick={() => navigate("/signin")} >Login</div>

            </li>


          </ul>

          <div onClick={() => navigate("/paymethodoption")}> <button type="button" className="btn btn-primary" >Donate</button></div>

        </div>




      </div>

    </nav>

  )

}

export default Navbar
