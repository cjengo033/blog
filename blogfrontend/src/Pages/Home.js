import React from 'react'
import Image from '../Assets/boat.jpg'

const Home = () => {

  const Nav = () => {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Blog Website</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }

  const Caro = () => {
    return (
      <>
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src={Image} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <button type="button" class="btn btn-success"><a href='/register'>Sign Up Now!</a></button>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <button type="button" class="btn btn-success">Sign Up</button>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <button type="button" class="btn btn-success">Sign Up</button>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>

          </button>


        </div>
      </>
    )
  }


  const Body = () => {
    return (
      <>
        <div className='m-5'>
          <div className='text-center'>
            <h1>Album example</h1>
            <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <div>
              <button type="button" className="btn btn-primary mr-2 p-2">Button Testing 1</button>
              <button type="button" className="btn btn-secondary p-2">Button Testing 2</button>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 2</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 3</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 4</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 5</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <h1>Testing 6</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container shadow-lg p-3 mb-5 bg-body-tertiary">
          <div class="row">
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary'>
                <h1>Image 1 - Description</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <img src={Image} className="img-thumbnail" />
                <h3>Image 1</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container shadow-lg p-3 mb-5 bg-body-tertiary">
          <div class="row">
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                <img src={Image} className="img-thumbnail" />
                <h3>Image 2</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
            <div class="col">
              <div className='shadow-lg p-3 mb-5 bg-body-tertiary'>
                <h1>Image 2 - Description</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>

          </div>
        </div>

      </>
    )
  }

  const Contact = () => {
    return (
      <>
        <div className='container shadow-lg p-3 mb-5 bg-body-tertiary'>
          <h1>Contact Us?</h1>
          <form>
            <div className='form-group'>
              <label>Subject: </label>
              <br></br>
              <input type="text" id="subject" class="form-control" />
            </div>

            <div className='form-group'>
              <label>Description: </label>
              <br></br>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="button" class="btn btn-secondary">Submit Form</button>
          </form>
        </div>

      </>
    )
  }

  const Footer = () => {
    return (
      <>
        <div className='text-center m-5'>
          <p>&#169;Website Reserved 2023</p>
        </div>
      </>
    )
  }
  return (
    <>
      <Nav />
      <Caro />
      <Body />
      <Contact />
      <Footer />


    </>
  )
}

export default Home