import { Grid } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div style={{ background: '#4d4d4f' }} >

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                style={{ color: "white" }}>

                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link to="/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </Link>

                    <Link to="/" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="/" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </Link>

                </div>
            </section>

            <Grid container spacing={4} sx={{ padding: '30px 20px', color: 'white' }}>
                <Grid item lg={1} md={1} sm={12} xm={12} xs={12}>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xm={6} xs={6}>
                    <div style={{ textAlign: 'left' }} >

                        <h6 className="text-uppercase fw-bold mb-4">
                            Navigation
                        </h6>

                        <p>
                            <Link to="/" className="text-reset">Home</Link>
                        </p>
                        <p>
                            <Link to="/about" className="text-reset">AboutUs</Link>
                        </p>
                        <p>
                            <Link to="/contactus" className="text-reset">ContactUs</Link>
                        </p>
                        <p>
                            <Link to="/apprules" className="text-reset">ApplyNow</Link>
                        </p>

                    </div>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xm={6} xs={6}>
                    <div style={{ textAlign: 'left', }} >
                        <h6 className="text-uppercase fw-bold mb-4">
                            Explore
                        </h6>
                        <p>
                            <Link to="/allproj" className="text-reset">Projects</Link>
                        </p>
                        <p>
                            <Link to="/allevent" className="text-reset">Events</Link>
                        </p>
                        <p>
                            <Link to="/reportpage" className="text-reset">Reports</Link>
                        </p>
                        <p>
                            <Link to="/volunteer" className="text-reset">Become Volunteer</Link>
                        </p>
                    </div>
                </Grid>

                <Grid item lg={4} md={4} sm={12} xm={12} xs={12}>
                    <div style={{ textAlign: 'left' }} >
                        <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p><i className="fas fa-home me-3"></i>Computer Science Department UET Lahore, Pakistan</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            socialwelfare@gmail.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 92 318 417 6600</p>
                        <p><i className="fas fa-print me-3"></i> + 92 349 511 1397</p>
                    </div>
                </Grid>

            </Grid>

            <section>
                <div className="text-center p-4 border-top" style={{ color: "white" }}>
                    © 2023 Copyright :
                    <Link className="text-reset fw-bold" to="/"> SocialWelfareSystem.com</Link>
                </div>
            </section>

        </div>
    )
}
