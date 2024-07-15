import './Home.css'

export default function Home() {



  return (
    <>

          <div id="carouselExampleFade" className="carousel slide carousel-fade vh-100" data-bs-ride="carousel" >
  <div className="carousel-inner h-100">
    <div className="carousel-item active h-100" data-bs-interval="2000">
    <section className='home d-flex align-items-center justify-content-center' id='content1'>
      <div className='home-content'> 
            <h2 className='fw-bold h1'> Hi! <br /> Im Jackson </h2>
            <p className='py-4 text-muted'>100% html5 bootstrap templates Made <br /> By <a target='_blank' href="https://colorlib.com/">Colorlib.com</a></p>

            <button className='btn btn-outline-dark rounded-0'>DOWNLOAD CV <i className='fa-solid fa-download '></i></button>
      </div> 
  </section >
    </div>
    <div className="carousel-item h-100" data-bs-interval="2000">
    <section className='home d-flex align-items-center justify-content-center' id='content2'>
          <div className='home-content'> 
                  <h2 className='fw-bold h1'>I am <br/> a Designer</h2>
                  <p className='py-4 text-muted'>100% html5 bootstrap templates Made <br /> By <a target='_blank' href="https://colorlib.com/">Colorlib.com</a></p>

                  <button className='btn btn-outline-dark rounded-0'>VIEW PORTFOLIO <i className='fa-solid fa-briefcase'></i></button>
            </div>
        </section>
    </div>

  </div>

</div>
          
    </>
  )
}
