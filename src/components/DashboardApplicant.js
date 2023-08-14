import { React, useEffect, useState, useRef } from "react";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../ApiConfig";

function DashboardApplicant() {
  //fetching user data
  const [showSuccess, setShowSuccess] = useState(false);
  const Cnic = useRef("");
  const Name = useRef("");
  const Email = useRef("");

  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const cnic = localStorage.getItem("usercnic");
    const token = localStorage.getItem("jwt");
    if (isAuthenticated) {
      axios.get(`${BASE_API_URL}/api/UserRegistries/${cnic}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        Cnic.current.value = response.data.cnic;
        Name.current.value = response.data.name;
        Email.current.value = response.data.email;
      });
    }
  }, []);


  function updateHandler() {
    var payload = {
      cnic: Cnic.current.value,
      name: Name.current.value,
      email: Email.current.value,
    };
    const CNIC = localStorage.getItem("usercnic");
    const TOKEN = localStorage.getItem("jwt");
    const headers = {
      Authorization: `Bearer ${TOKEN}`
    };
    axios
      .put(`${BASE_API_URL}/api/UserRegistries/${CNIC}`, payload, { headers })
      .then((response) => {
        console.log(response);
        // Show the success notification
        setShowSuccess(true);

        // Hide the success notification after a few seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      });
  }

  // useEffect(() => {
  //   // Fetch user data from the API using the stored JWT
  //   const token = localStorage.getItem('jwt');
  //   const cnic = localStorage.getItem('usercnic');

  //   if (token && cnic) {
  //     fetch(`${BASE_API_URL}/api/UserRegistries/${cnic}`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       setUserData(data);

  //     })
  //     .catch(error => {
  //       console.error('Error fetching user data:', error);
  //     });
  //   }
  // }, []);

  //update user data

  //on Log Out Function
  const handleLogout = async () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("usercnic");
    logout();
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />

      <section
        className="row d-flex justify-content-center mb-4"
        style={{ marginTop: "8%", width: "100%" }}
      >
        <div
          className="tab-content col-10 shadow-2-strong"
          style={{ borderRadius: "10px" }}
        >
          <div className="row mx-2 my-5">
            <div
              className="col-3 shadow-1-strong"
              style={{ height: "780px", borderRadius: "30px" }}
            >
              <div className="mt-4 text-center">
                <h4>Dashboard</h4>
              </div>

              <div className="text-center mt-4 mb-3">
                <img
                  src="./img/9.jpg"
                  className="rounded-circle shadow-2-strong"
                  width="150px"
                  height="150px"
                  alt="avatar"
                />
              </div>

              <div className="text-center" style={{ marginBottom: "25%" }}>
                <h6>{Name.current.value}</h6>
              </div>

              <div
                className="nav flex-column nav-pills text-center"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-mdb-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Personal Info
                </a>

                <a
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-mdb-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  My Applications
                </a>

                <a
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-mdb-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  My Donations
                </a>

                <a
                  className="nav-link"
                  id="v-pills-setting-tab"
                  data-mdb-toggle="pill"
                  href="#v-pills-setting"
                  role="tab"
                  aria-controls="v-pills-setting"
                  aria-selected="false"
                >
                  Settings
                </a>
              </div>

              <div className="text-center mb-3" style={{ marginTop: "50%" }}>
                {isAuthenticated ? (
                  <Link
                    to="home"
                    onClick={handleLogout}
                    className="btn btn-primary"
                    style={{ width: "120px" }}
                  >
                    Logout
                  </Link>
                ) : (
                  <p>You are already logged out.</p>
                )}
              </div>
            </div>

            <div className="col-9">
              {/* personal information section */}

              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="mt-4 mx-4">
                    <h4>Personal Information</h4>
                  </div>

                  <form className="my-4" style={{ margin: "3% 0 0 2%" }}>

                    {showSuccess && (
                      <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                        Data updated successfully!
                      </Alert>
                    )}
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" ref={Name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" ref={Email} disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCnic">
                      <Form.Label>Cnic</Form.Label>
                      <Form.Control type="text" ref={Cnic} disabled />
                    </Form.Group>
                  </form>
                  <Button variant="primary" className="mt-4 text-center" type="button" onClick={updateHandler}>
                    Update
                  </Button>
                </div>

                {/* my application section */}

                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="mt-4 mx-4">
                    <h4>My Applications</h4>
                  </div>

                  <table
                    class="table"
                    style={{ width: "100%", margin: "3% 0 0 1%" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ color: "black" }}>
                          #
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Application
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Application Date
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody class="table-group-divider table-divider-color">
                      <tr>
                        <th scope="row">1</th>

                        <td>Need base Money Grant</td>

                        <td>10/4/2022</td>

                        <td>Approved</td>

                        <td>
                          <a href="!#">View</a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>

                        <td>Marriage Grant</td>

                        <td>10/4/2022</td>

                        <td>Pending</td>

                        <td>
                          <a href="!#">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* my donations section */}

                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div className="mt-4 mx-4">
                    <h4>My Donations</h4>
                  </div>

                  <table
                    class="table"
                    style={{ width: "100%", margin: "3% 0 0 1%" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col" style={{ color: "black" }}>
                          #
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Donation to
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Donation Date
                        </th>

                        <th scope="col" style={{ color: "black" }}>
                          Amount(Rs)
                        </th>
                      </tr>
                    </thead>

                    <tbody class="table-group-divider table-divider-color">
                      <tr>
                        <th scope="row">1</th>

                        <td>Need base Money Grant</td>

                        <td>10/4/2022</td>

                        <td>500</td>

                        <td>
                          <a href="!#">View</a>
                        </td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>

                        <td>Marriage Grant</td>

                        <td>10/4/2022</td>

                        <td>1000</td>

                        <td>
                          <a href="!#">View</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* setting */}

                <div
                  className="tab-pane fade"
                  id="v-pills-setting"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div className="mt-4 text-center">
                    <h4>Setting & privacy</h4>
                  </div>

                  <form className="my-5 mx-4">
                    <div
                      className="mb-4 "
                      style={{
                        width: "48.5%",
                        position: "absolute",
                        left: "35%",
                      }}
                    >
                      <div
                        classNameName="shadow-sm p-3  bg-white rounded"
                        style={{ width: "200%" }}
                      >
                        <h5>Language </h5>

                        <div
                          className="dropdown"
                          style={{
                            position: "absolute",

                            top: "0%",

                            left: "75%",
                          }}
                        >
                          <a
                            className="btn btn-primary dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Change
                          </a>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                English
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                Urdu
                              </a>
                            </li>
                          </ul>
                        </div>

                        <hr style={{ width: "55%" }} />

                        <h5>Color Mode </h5>

                        <div
                          className="dropdown"
                          style={{
                            position: "absolute",

                            top: "20%",

                            left: "75%",
                          }}
                        >
                          <a
                            className="btn btn-primary dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Change
                          </a>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Dark
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                White
                              </a>
                            </li>
                          </ul>
                        </div>

                        <hr style={{ width: "55%" }} />

                        <h5>Account Status </h5>

                        <div
                          className="dropdown"
                          style={{
                            position: "absolute",

                            top: "40%",

                            left: "75%",
                          }}
                        >
                          <a
                            className="btn btn-primary dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Change
                          </a>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Activate
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                Deactivate
                              </a>
                            </li>
                          </ul>
                        </div>

                        <hr style={{ width: "55%" }} />

                        <h5>Profile Setting </h5>

                        <div
                          className="dropdown"
                          style={{
                            position: "absolute",

                            top: "64%",

                            left: "75%",
                          }}
                        >
                          <a
                            className="btn btn-primary dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Change
                          </a>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Hide/Private
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                Show/Public
                              </a>
                            </li>
                          </ul>
                        </div>

                        <hr style={{ width: "55%" }} />

                        <h5>Change Password </h5>

                        <Link to="/changepass">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg ms-2"
                            style={{
                              height: "39px",
                              position: "absolute",
                              left: "74%",
                              top: "87%",
                            }}
                          >
                            Change
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </>
  );
}

export default DashboardApplicant;
