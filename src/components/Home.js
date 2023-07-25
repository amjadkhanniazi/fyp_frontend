import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate, } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function Home() {

  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      {/* slider Section Start */}
      <section>
        <div id="carouselMaterialStyle" style={{ marginTop: '2%' }} className="carousel slide carousel-fade" data-mdb-ride="carousel">

          <div className="carousel-indicators">
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2"
              aria-label="Slide 3"></button>
          </div>


          <div className="carousel-inner rounded-5 shadow-4-strong">

            <div className="carousel-item active">
              <img src="./img/6.jpg" className="d-block w-100"
                alt="Sunset Over the City" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ marginLeft: "-67%" }}> Support a Cause</h1>
                <h1 style={{ marginLeft: "-70%" }}>you care about</h1>
                <p style={{ marginLeft: "-55%", marginTop: "5%" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <div className="py-4 text-center" style={{ marginLeft: "-60%", marginTop: "7%" }}>
                  <div role="button" className="btn btn-primary btn-lg m-2"
                    onClick={() => navigate('/paymethodoption')} rel="nofollow" >
                    Donate Now
                  </div>
                  <div role="button" className="btn btn-primary btn-lg m-2"
                    onClick={() => navigate("/application")}
                  >
                    Become a Volunteer
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/39.jpg" className="d-block w-100"
                alt="Canyon at Nigh" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ marginTop: "-50%", marginLeft: "-67%" }}> Support a Cause</h1>
                <h1 style={{ marginLeft: "-70%" }}>you care about</h1>
                <p style={{ marginLeft: "-55%", marginTop: "5%" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <div className="py-4 text-center" style={{ marginLeft: "-60%", marginTop: "7%" }}>
                  <a role="button" className="btn btn-primary btn-lg m-2"
                    href="/paymethodoptions" rel="nofollow" >
                    Donate Now
                  </a>
                  <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                  >
                    Become a Volunteer
                  </a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/3.jpg" className="d-block w-100"
                alt="Cliff Above a Stormy Sea" />
              <div className="carousel-caption d-none d-md-block">
                <h1 style={{ marginTop: "-50%", marginLeft: "-67%" }}> Support a Cause</h1>
                <h1 style={{ marginLeft: "-70%" }}>you care about</h1>
                <p style={{ marginTop: "5%", marginLeft: "-55%" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <div className="py-4 text-center" style={{ marginTop: "7%", marginLeft: "-60%" }}>
                  <a role="button" className="btn btn-primary btn-lg m-2"
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" >
                    Donate Now
                  </a>
                  <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/"
                  >
                    Become a Volunteer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* slider Section End */}

      <section>

        <div style={{ padding: '0px 10%' }} >

          {/* style={{ width: "80%", margin: "auto" }} */}


          {/* Project Section 2 */}

          <section className="text-center" style={{ marginTop: "10%" }}>
            <h2 className="mb-5"><strong>Latest Projects</strong></h2>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/44.jpg" alt='' className="img-fluid" />
                    {/* <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Rashan Packs</h5>
                    <p className="card-text" style={{ textAlign: "justify-content" }}>
                      There are 842 million undernourished people in the world today. That means one in eight people do not get enough food to be healthy and lead an active life.

                      Hunger and malnutrition are in fact the number one risk to health worldwide — greater than AIDS, malaria and tuberculosis combined.
                    </p>
                    <div onClick={() => navigate("/projectdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/35.jpg" alt='' className="img-fluid" />
                    {/* <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Patient</h5>
                    <p className="card-text" style={{ textAlign: "justify-content" }}>
                      The donation will be utilized by Patient Support Group (PSG) of CAM to provide cataract surgeries for poor patients. If a patient needs a cataract surgery and he is unable to pay the costs, PSG conducts a background check of the patient and analyze his/her socio-economic condition.

                      .
                    </p>
                    <div onClick={() => navigate("/projectdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/11.jpg" alt='' className="img-fluid" />
                    {/* <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Marriage Grant</h5>
                    <p className="card-text" style={{ textAlign: "justify-content" }}>
                      Marriage grant of Rs. 50,000 is paid on marriage of one child (irrespective of gender) of serving, retired or deceased employee. ( Current rate & conditions of admissiblity are applicable on marriage w.e.f., 21.04.2011)
                      A worker / miner can get a marriage
                    </p>
                    <div onClick={() => navigate("/projectdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 text-center">
              <div onClick={() => navigate("/allevent")} role="button" className="btn btn-primary btn-lg m-2"
                rel="nofollow">
                See All Projects
              </div>
            </div>
          </section>

          {/* Home About Section3 */}

          <section style={{ marginTop: "10%" }}>
            <Grid container mt={5} sx={{ borderRadius: '10px', backgroundColor: "rgb(218, 218, 218)", overflow: 'hidden' }} >
              <Grid item lg={6} md={6} sm={6} xm={12} xs={12}>
                <img src="./img/41.jpg" alt='' width="100%" height="400px" className="image-responsive" />
              </Grid>
              <Grid item lg={6} md={6} sm={6} xm={12} xs={12} pb={2}>
                <div >
                  <h1 style={{ textAlign: "left", marginLeft: "5%", marginTop: "5%" }}>Who Are WE ?</h1>
                  <p style={{ textAlign: "justify", padding: "20px" }}>Social Welfare System is a nonprofit organization that supports
                    several communities in Pakistan in improving their standard of living.
                    The social welfare system is working all over Pakistan and improving the lives of people in many parts of the country, according to a report by the Social Welfare Organization (SWO), social welfare system set up in Pakistan in 2022.
                  </p><Link to="/about">
                    <button className="btn btn-primary d-block mr-0 ml-auto" style={{ margin: '0px auto' }}>Read more</button>
                  </Link> </div>
              </Grid>
            </Grid>
          </section>

          {/* Home Progress section */}

          <section style={{ marginTop: "10%" }}>


            <Grid container mt={2}
              style={{ backgroundColor: "#0C56D0", borderRadius: "40px" }} >

              <Grid item lg={4} md={4} sm={6} xm={12} xs={12}>
                <div style={{ textAlign: 'center' }} >
                  {/* <img src="./img/4.png" alt='' style={{ marginTop: "18%" }} /> */}
                  <h3 style={{ color: "white", margin: "23% 0px" }}>35+ Cases</h3>
                </div>
              </Grid>

              <Grid item lg={4} md={4} sm={6} xm={12} xs={12}>
                <div style={{ textAlign: 'center' }} >
                  {/* <img src="./img/2.png" alt='' style={{ marginTop: "18%", float: "left" }} /> */}
                  <h3 style={{ color: "white", margin: "21% 0px" }}>12M People Joined</h3>
                </div>
              </Grid>

              <Grid item lg={4} md={4} sm={6} xm={12} xs={12}>
                <div style={{ textAlign: 'center' }}>
                  {/* <img src="./img/3.png" alt='' style={{ marginTop: "18%", float: "left" }} /> */}
                  <h3 style={{ color: "white", margin: "20% 0px" }}>12000 Peoples <br />get help from us</h3>
                </div>
              </Grid>


            </Grid>


          </section>

          {/* Home event section */}

          <section className="text-center" style={{ marginTop: "10%" }}>
            <h2 className="mb-5"><strong>Latest Events</strong></h2>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/42.jfif" style={{ height: "100%", width: "100%" }} alt='' className="img-fluid" />
                    {/* <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Eid-Ul-Azha (Qurbani)</h5>
                    <p className="card-text">
                      Eid-Ul-Azha is a holy event for the Muslims. It celebrates Ibrahim's (Abraham's) readiness to obey Allah's instruction by offering his son Ismail (Ishmael) as a sacrifice. But before Ibrahim could sacrifice his son, God gave him a lamb, which he was to sacrifice in lieu of his son.
                      Animals are humanely sacrificed in remembrance of this intervention
                    </p>
                    <div onClick={() => navigate("/eventdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/4.jpg" alt='' className="img-fluid" />
                    {/* <a href="/eventdescrip">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Safe Water</h5>
                    <p className="card-text">
                      In addition to offering clean water in times of need, SWS strives to enhance
                      water supply, sanitation, and hygiene to halt the spread of diseases in disadvantaged communities around the world. We also direct educational initiatives that encourage cleanliness and excellent health. Following the tragic earthquake in Haiti, SWS distributed water purification kits that could

                    </p>
                    <div onClick={() => navigate("/eventdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="./img/13.jpg" alt='' className="img-fluid" />
                    {/* <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a> */}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Zakat al Fitr:</h5>
                    <p className="card-text">
                      At the conclusion of Ramadan, a month during which Muslims fast, zakat
                      al-Fitr is charitable giving to the needy. Before the day of Eid, Islamic Aid advises that $5 be given to every household member, including children,
                      adults, and household staff adults, and household staff,staff,comapany
                      and household staff.and household staff.
                      and household staff.

                    </p>
                    <div onClick={() => navigate("/eventdescrip")} className="btn btn-primary">Read More</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 text-center">
              <div onClick={() => navigate("allproj")} role="button" className="btn btn-primary btn-lg m-2"
                rel="nofollow">
                See All Events
              </div>
            </div>
          </section>

          {/* Home News letter section */}

          <section style={{ padding: '50px 0px' }}>
            <div className="shadow-4-strong" style={{ height: "300px", width: "100%", backgroundColor: "#0C56D0", borderRadius: "40px" }}>

              <form>
                <h2 style={{ color: "white", textAlign: "center", lineHeight: "100px" }}>NewsLetter</h2>

                <div className="form-outline form-control"
                  style={{ width: "80%", maxWidth: '500px', border: "1px solid black", borderRadius: "4px", margin: "auto", backgroundColor: "white" }}>

                  <input type="text" id="form12" className="form-control" />
                  <label className="form-label" htmlFor="form12">Email</label>

                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" style={{
                  width: "80%", maxWidth: '500px', margin: "3% auto",
                  color: "#0C56D0", backgroundColor: "white", fontWeight: "bold", fontSize: "15px"
                }}>

                  Subscribe
                </button>


              </form>
            </div>

          </section>


        </div >

      </section >

      <section>
        <Footer />
      </section>



      {/* <div style={{ position: 'absolute', bottom: '0px', left: "0px" }}> */}
      {/* </div> */}
    </>
  )
}
