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
    	<div className="demo-banner py-3 text-white text-center fw-bold theme-bg-secondary text-white">Искате вашите новини да стигнат до повече хора? <a className="btn font-weight-bold ms-2 theme-btn-on-bg mt-2 mt-md-0" href="/contacts"><FontAwesomeIcon icon={faExternalLinkAlt} className="fas me-2" />Свържете се с нас!</a>
    </div>

    <section className="hero-section">
	    <div className="container">
		    <div className="row figure-holder">
			    <div className="col-12 col-md-6 pt-3 pt-md-4">
				    <h2 className="site-headline font-weight-bold mt-lg-5 pt-lg-5">Включете се в мрежата на народа!</h2>
				    <div className="site-tagline mb-3">Споделяне на добрите новини! Осветляване на проблемите на народа! Ела при нас!</div>
				    <div className="cta-btns">
					    <div className="mb-4"><a className="btn btn-primary font-weight-bold theme-btn" href="/register">Регистрирай се</a></div>
					    <ul className="app-stores list-unstyled list-inline mx-auto mx-md-0 d-inline-block">
						    <li className="list-inline-item me-3"><a href="/TODO-apple"><img className="ios" src="/assets/images/appstore-apple.svg" alt="app-store"/></a></li>
						    <li className="list-inline-item"><a href="/TODO-android"><img className="android" src="/assets/images/appstore-android.svg" alt="google play"/></a></li>
					    </ul>
				    </div>
			    </div>
		    </div>
	    </div>
    </section>

    <section className="logos-section theme-bg-primary py-5 text-center">
	    <div className="container">
		    <h3 className="mb-5">Медии, които ни се довериха</h3>
		    <div className="logos-row row mx-auto">
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-1.png" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-2.png" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-3.png" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-4.png" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-5.png" alt="logo"/>
		            </div>
	            </div>
	            <div className="item col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
		            <div className="item-inner">
		                <img height="76" src="/assets/images/logos/media-6.png" alt="logo"/>
		            </div>
	            </div>

	        </div>

	    </div>
    </section>

    <section className="benefits-section py-5">

	    <div className="container py-lg-5">
		    <h3 className="mb-5 text-center font-weight-bold">Какви са целите на народната мрежа!</h3>
		    <div className="row">
		        <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-target.svg" alt="" />
					    <h5>Създаване на народна мрежа</h5>
					    <div>Първата по рода си народна мрежа. Тук обикновеният човек може да се информира за случващото се в страната спрямо своите интереси! </div>
				    </div>
			    </div>
			    <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-rocket.svg" alt="" />
					    <h5>Възход на България</h5>
					    <div>Просперитет в България може да се постигне само, когато народът е добре информиран за реалността в страната и е непримирим в борбата с корупцията! </div>
				    </div>
			    </div>
			    <div className="item col-12 col-lg-4">
				    <div className="item-inner text-center p-3 p-lg-5">
					    <img className="mb-3" src="/assets/images/icon-cogs.svg" alt="" />
					    <h5>Информиране по интереси</h5>
					    <div>Всеки човек ще може да настрои приложението да го информира спрямо неговите интереси! Абонирайте се за вашите любими теми! </div>
				    </div>
			    </div>
		    </div>
	    </div>

    </section>

    <section className="features-section py-5">
	    <div className="container py-lg-5 position-relative">
		    <h3 className="mb-3 text-center font-weight-bold section-heading">Основни фукционалности</h3>
		    <div className="row pt-5 mb-5">

			    <div className="col-12 col-md-6 col-xl-5 offset-xl-1 d-none d-md-block">
				    <img className="product-figure product-figure-1 img-fluid" src="/assets/images/screens/screen-3.png" alt="" />
			    </div>

		        <div className="col-12 col-md-6 col-xl-5 pr-xl-3 pt-md-3">
				    <div className="card rounded border-0 shadow-lg  mb-5">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Новини</h5>
							</div>
							<p className="card-text">Приложението комбинира различни източници на новини. Нашата основна цел е да споделим добрите новини! </p>
							<a className="more-link" href="#" >Научи повече <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>

				    <div className="card rounded border-0 shadow-lg mb-5">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Интереси</h5>
							</div>
							<p className="card-text">Всеки потребител ще може да дефинира своите интереси. По този начин приложението ще подбере подходящите новини за всеки!</p>
							<a className="more-link" href="#" >Научи повече <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
				    <div className="card rounded border-0 shadow-lg">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Анкети</h5>
							</div>
							<p className="card-text">Създаването на гражданско общество изисква и допитването до него! Чрез анкетите гласът на народа ще бъде чут!</p>
							<a className="more-link" href="#" >Научи повече <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
			    </div>
		    </div>

		    <div className="row">
			    <div className="col-12 col-md-6 col-xl-5 order-md-2 pr-xl-3 d-none d-md-block">
				    <img className="product-figure product-figure-2 img-fluid" src="/assets/images/screens/screen-3.png" alt="" />
			    </div>
			    <div className="col-12 col-md-6 col-xl-5 order-md-1 offset-xl-1 pt-xl-5">
				    <div className="card rounded border-0 shadow-lg  mb-5">
					    <div className="card-body p-4">
					        <div>
                              <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							  <h5 className="card-title">Статистика</h5>
							</div>
							<p className="card-text">Чрез създаването на различни статистики ще покажем на хората, че не са сами! </p>
							<a className="more-link" href="#" >Научи повече <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>

				    <div className="card rounded border-0 shadow-lg">
					    <div className="card-body p-4">
					        <div>
					            <FontAwesomeIcon icon={faChartBar} className="far me-2 me-lg-3 text-primary fa-lg fa-fw" />
							    <h5 className="card-title">Очаквайте още</h5>
							</div>
							<p className="card-text">Това е първоначална версия на приложението. Очаквайте още много неща!</p>
							<a className="more-link" href="#" >Научи повече <span className="more-arrow">&rarr;</span></a>
						</div>
				    </div>
			    </div>

		    </div>
	    </div>

    </section>

     <footer className="footer theme-bg-primary">
	    <div className="download-area py-4">
		    <div className="container text-center">
			    <h3 className="mb-3">Свали приложението</h3>
		    <div className="section-intro mb-4 single-col-max-width mx-auto">Включи се в народната мрежа! Първото по рода си приложение в България, което цели да свърже обикновените хора! Заедно сме сила!</div>
			    <ul className="app-stores list-unstyled list-inline mx-auto  d-inline-block">
				    <li className="list-inline-item me-3"><a href="#"><img className="ios" src="/assets/images/appstore-apple.svg" alt="app-store" /></a></li>
				    <li className="list-inline-item"><a href="#"><img className="android" src="/assets/images/appstore-android.svg" alt="google play" /></a></li>
			    </ul>
		    </div>
	    </div>
	    <div className="footer-bottom text-center pb-5">
            <small className="copyright">Designed by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a></small>
	    </div>

    </footer>

       <script type="text/javascript" src="assets/plugins/popper.min.js"></script>
       <script type="text/javascript" src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    </div>
  );
}
