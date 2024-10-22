'use client'

import  "bootstrap/dist/css/bootstrap.min.css"
import './assets/styles/theme.css'
import './assets/styles/fonts.css'
import './assets/styles/landing.css'

import Flickity from 'react-flickity-component'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faChartBar, faStar, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  return (
    <div>
    	<div className="demo-banner py-3 text-white text-center fw-bold theme-bg-secondary text-white">Love this template? Need more page designs? <a className="btn font-weight-bold ms-2 theme-btn-on-bg mt-2 mt-md-0" href="https://themes.3rdwavemedia.com/bootstrap-templates/mobile/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas me-2" />Check out <span className="text-uppercase">Nova Pro</span></a>
    </div>

    <section className="hero-section">
	    <div className="container">
		    <div className="row figure-holder">
			    <div className="col-12 col-md-6 pt-3 pt-md-4">
				    <h2 className="site-headline font-weight-bold mt-lg-5 pt-lg-5">The best way to promote your app and convert users.</h2>
				    <div className="site-tagline mb-3">High converting Bootstrap landing page template made for app developers. Built with Bootstrap 5 and Sass. Get started now!</div>
				    <div className="cta-btns">
					    <div className="mb-4"><a className="btn btn-primary font-weight-bold theme-btn" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/">Try Nova for FREE</a></div>
					    <ul className="app-stores list-unstyled list-inline mx-auto mx-md-0 d-inline-block">
						    <li className="list-inline-item me-3"><a href="#"><img className="ios" src="/assets/images/appstore-apple.svg" alt="app-store"/></a></li>
						    <li className="list-inline-item"><a href="#"><img className="android" src="/assets/images/appstore-android.svg" alt="google play"/></a></li>
					    </ul>
				    </div>
			    </div>
		    </div>
	    </div>
    </section>

    <section className="logos-section theme-bg-primary py-5 text-center">
	    <div className="container">
		    <h3 className="mb-5">Trusted by hundreds of software businesses</h3>
		    <div className="logos-row row mx-auto">
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-1.svg" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-2.svg" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-3.svg" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-4.svg" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-5.svg" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img src="/assets/images/logos/logo-6.svg" alt="logo"/>
		            </div>
	            </div>

	        </div>

	    </div>
    </section>

    <section className="benefits-section py-5">

	    <div className="container py-lg-5">
		    <h3 className="mb-5 text-center font-weight-bold">Market your mobile app effectively with Nova</h3>
		    <div className="row">
		        <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-target.svg" alt="" />
					    <h5>Focused on UX</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
				    </div>
			    </div>
			    <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-rocket.svg" alt="" />
					    <h5>Convert Users</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
				    </div>
			    </div>
			    <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-cogs.svg" alt="" />
					    <h5>Easy Customisations</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
				    </div>
			    </div>
		    </div>
		    <div className="pt-3 text-center">
			    <a className="btn btn-primary theme-btn theme-btn-ghost font-weight-bold" href="#">Learn More</a>
		    </div>
	    </div>

    </section>

    <section className="features-section py-5">
	    <div className="container py-lg-5 position-relative">
		    <h3 className="mb-3 text-center font-weight-bold section-heading">Feature Highlights</h3>
		    <div className="row pt-5 mb-5">

			    <div className="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
				    <img className="product-figure product-figure-1 img-fluid" src="/assets/images/product-figure-1.png" alt="" />
			    </div>

		        <div className="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3">
				    <div className="card rounded border-0 shadow-lg  mb-5">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Feature Lorem Ipsum</h5>
							</div>
							<p className="card-text">List one of your product's main features here. The screenshots used in this template are taken from Bootstrap admin template Appify. </p>
							<a className="more-link" href="#" >Learn more <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>

				    <div className="card rounded border-0 shadow-lg mb-5">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Feature Consectetuer</h5>
							</div>
							<p className="card-text">List one of your product's main features here. The screenshots used in this template are taken from Bootstrap admin template Appify.</p>
							<a className="more-link" href="#" >Learn more <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
				    <div className="card rounded border-0 shadow-lg">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Feature Lorem Ipsum</h5>
							</div>
							<p className="card-text">List one of your product's main features here. The screenshots used in this template are taken from Bootstrap admin template Appify.</p>
							<a className="more-link" href="#" >Learn more <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
			    </div>
		    </div>

		    <div className="row">
			    <div className="col-12 col-md-6 col-xl-5 order-md-2 pr-xl-3 d-none d-md-block">
				    <img className="product-figure product-figure-2 img-fluid" src="/assets/images/product-figure-2.png" alt="" />
			    </div>
			    <div className="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-1 pt-xl-5">
				    <div className="card rounded border-0 shadow-lg  mb-5">
					    <div className="card-body p-4">
					        <div>
                              <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							  <h5 className="card-title">Feature Commodo</h5>
							</div>
							<p className="card-text">List one of your product's main features here. The screenshots used in this template are taken from Bootstrap admin template Appify. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>
							<a className="more-link" href="#" >Learn more <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>

				    <div className="card rounded border-0 shadow-lg">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Feature  Ligula Eget</h5>
							</div>
							<p className="card-text">List one of your product's main features here. Lorem ipsum dolor sit amet. The screenshots used in this template are taken from Bootstrap admin template Appify.</p>
							<a className="more-link" href="#" >Learn more <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
			    </div>

		    </div>

		    <div className="pt-5 text-center">
			    <a className="btn btn-primary theme-btn theme-btn-ghost font-weight-bold" href="#">View all features</a>
		    </div>
	    </div>

    </section>

    <section className="cta-section py-5 theme-bg-secondary text-center">
	    <div className="container">
		    <h3 className="text-white font-weight-bold mb-3">Ready to turn your visitors to app users?</h3>
		    <div className="text-white mx-auto single-col-max-width section-intro">Try Nova Free Today. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.</div>
		    <a className="btn theme-btn theme-btn-ghost theme-btn-on-bg mt-4" href="#">Download  Now - It's FREE</a>
	    </div>
    </section>


    <section id="quote" className="testimonial-section py-5">
	    <div className="py-lg-5">
		    <h3 className="mb-5 text-center">Loved by thousands of app developers like you</h3>

	            <Flickity
                  className={'testimonial-carousel'}
                  elementType={'div'}
                  options={{contain: true,
                           	wrapAround: true,
                           	autoPlay: true,
                           	percentPosition: false,
                           	}}
                  disableImagesLoaded={false}
                  reloadOnUpdate // default false
                  static // default false
                >

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Amazing App!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-1.jpg" alt="" />
					        </div>
						    <div className="source-info col pt-3">
							    <div>Tony Carter</div>
							    <div>London, UK</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Marvellous!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><i className="fas fa-star-half"></i></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-2.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Helen Owens</div>
							    <div>New York, US</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Actually Impressive!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-3.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Scott Rivera</div>
							    <div>Florida, US</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Total Game Changer!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-4.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Charles Brewer</div>
							    <div>San Francisco, US</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Just Perfect!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-5.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Deborah Reed</div>
							    <div>Paris, France</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Great App!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle" src="/assets/images/users/user-6.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Tony Cheng</div>
							    <div>San Francisco, US</div>
						    </div>
					    </div>
				    </div>
			    </div>

			    <div className="carousel-cell">
				    <div className="item-inner shadow rounded">
					    <h5 className="mb-2">Exceptional!</h5>
					    <div className="ratings text-primary mb-3"><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /><FontAwesomeIcon icon={faStar} className="far" /></div>
					    <div className="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					    </div>
					    <div className="source row">
						    <div className="col-auto">
						        <img className="source-profile rounded-circle me-3" src="/assets/images/users/user-7.jpg" alt="" />
						    </div>
						    <div className="source-info col pt-3">
							    <div>Kimberly Wells</div>
							    <div>London, UK</div>
						    </div>
					    </div>
				    </div>
			    </div>

                </Flickity>

		    <div className="pt-5 text-center">
			    <a className="btn btn-primary theme-btn font-weight-bold" href="#">Try Nova Now</a>
		    </div>

	    </div>

    </section>


    <footer className="footer theme-bg-primary">
	    <div className="container py-5 mb-3">
		    <div className="row">
			    <div className="footer-col col-6 col-lg-3">
				    <h4 className="col-heading">About Nova</h4>
				    <ul className="list-unstyled">
					    <li><a className="text-link" href="#">Our Story</a></li>
					    <li><a className="text-link" href="#">Pricing</a></li>
					    <li><a className="text-link" href="#">Contact</a></li>
					    <li><a className="text-link" href="#">Jobs</a></li>

				    </ul>
			    </div>
			    <div className="footer-col col-6 col-lg-3">
				    <h4 className="col-heading">Resources</h4>
				    <ul className="list-unstyled">
					    <li><a className="text-link" href="#">FAQs</a></li>
					    <li><a className="text-link" href="#">Blog</a></li>
					    <li><a className="text-link" href="#">Support</a></li>
					    <li><a className="text-link" href="#">Developer APIs</a></li>
				    </ul>
			    </div>
			    <div className="footer-col col-6 col-lg-3">
				    <h4 className="col-heading">Legal</h4>
				    <ul className="list-unstyled">
					    <li><a className="text-link" href="#">Privacy</a></li>
					    <li><a className="text-link" href="#">Terms of Services</a></li>
					    <li><a className="text-link" href="#">Security</a></li>
				    </ul>
			    </div>
			    <div className="footer-col col-6 col-lg-3">
				    <h4 className="col-heading">Stay Connected</h4>

		            <div className="mb-2">
			            Company Name<br/>
			            2419 Locust View Drive <br/>
			            San Francisco, CA, 94143
		            </div>
		            <div>
			            <a className="text-link" href="#">hello@yourcompany.com</a>
			        </div>

			    </div>
		    </div>
	    </div>
	    <div className="container">
		    <hr/>
	    </div>
	    <div className="download-area py-4">
		    <div className="container text-center">
			    <h3 className="mb-3">Get the app</h3>
		    <div className="section-intro mb-4 single-col-max-width mx-auto">Download our apps now. lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. </div>
			    <ul className="app-stores list-unstyled list-inline mx-auto  d-inline-block">
				    <li className="list-inline-item me-3"><a href="#"><img className="ios" src="/assets/images/appstore-apple.svg" alt="app-store" /></a></li>
				    <li className="list-inline-item"><a href="#"><img className="android" src="/assets/images/appstore-android.svg" alt="google play" /></a></li>
			    </ul>
		    </div>
	    </div>
	    <div className="footer-bottom text-center pb-5">
            <small className="copyright">Designed <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a></small>
	    </div>

    </footer>

       <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
       <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}
