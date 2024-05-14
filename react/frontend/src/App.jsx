import axios from "axios"
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

// import './App.css'


function App() {

  const [products, setProducts] = useState([])

  
  useEffect(()=>{
  axios.get('http://127.0.0.1:8000/api/products')
  .then(res => setProducts(res.data.data))
  .catch(error => console.log(error))
}, [])

const smartphones = products.filter(product => product.categorie == "smartphone")
const smartwatches = products.filter(product => product.categorie == "smartwatch")


  return (
    <>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/main-logo.png" className="logo"/>
          </a>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand" href="index.html">
                <img src="assets/images/main-logo.png" className="logo"/>
              </a>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link me-4 active" href="#billboard">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#company-services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#mobile-products">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#smart-watches">Watches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#yearly-sale">Sale</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-4" href="#latest-blog">Blog</a>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="pe-3">
                        <a href="#">
                          <svg className="user">
                            <use xlinkHref="#user"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
          
      <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src="assets/images/banner-image.png" alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src="assets/images/banner-image.png" alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg className="chevron-left">
          <use xlinkHref="#chevron-left" />
        </svg>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          <use xlinkHref="#chevron-right" />
        </svg>
      </div>
    </section>
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="cart-outline">
                  <use xlinkHref="#cart-outline" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="quality">
                  <use xlinkHref="#quality" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="price-tag">
                  <use xlinkHref="#price-tag" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <svg className="shield-plus">
                  <use xlinkHref="#shield-plus" />
                </svg>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <Carousel>
            {smartphones ? smartphones.map((item)=>(
              <Carousel.Item interval={3000}>
              <Image src={`http://127.0.0.1:8000${item.image}`} fluid />;
                <Carousel.Caption>
                  <h3 className="text-primary">{item.nom}</h3>
                  <h4 className="text-primary">${item.prix}</h4>
                  <Link to={"/products/"+item.id}>
                    <Button variant="primary">
                      Voir les détails
                    </Button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>      
            )) : null}
          </Carousel>
        </div> 
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <Carousel>
            {smartwatches ? smartwatches.map((item)=>(
              <Carousel.Item interval={3000}>
                <Image src={`http://127.0.0.1:8000${item.image}`} fluid />;
                <Carousel.Caption>
                  <p className="text-light">{item.nom}</p>
                  <p className="text-light">${item.prix}</p>
                  <Link to={"/products/"+item.id}>
                    <Button variant="primary">
                      Voir les détails
                    </Button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>      
            )): null}
          </Carousel>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    <div id="footer-bottom">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="Shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src="assets/images/dhl.png" alt="visa"/>
                <img src="assets/images/shippingcard.png" alt="mastercard"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src="assets/images/visa.jpg" alt="visa"/>
                <img src="assets/images/mastercard.jpg" alt="mastercard"/>
                <img src="assets/images/paypal.jpg" alt="paypal"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="copyright">
              <p>© Copyright 2023 MiniStore. Design by <a href="https://templatesjungle.com/">TemplatesJungle</a> Distribution by <a href="https://themewagon.com">ThemeWagon</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
