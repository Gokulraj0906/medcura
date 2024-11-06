import React from 'react';
import {
  MDBContainer,
  // MDBNavbar,
  // MDBNavbarBrand,
  // MDBNavbarNav,
  // MDBNavbarItem,
  // MDBNavbarToggler,
  // MDBCollapse,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBFooter,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import MyNavbar from './Navbar';

const HomePage = () => {
  return (
    <>
    <body>
      {/* Navbar */}

      <MyNavbar/>
      <div id='space'></div>
      <div id='top'>
        <h1 id='font1'>Medical Image Detection for Brain Stroke And Tumor</h1>
      </div>
      <style>{`
      #space{
      height:100px;
      }
      #img1{
        margin: 20px 20px 20px 20px;
        border-radius: 25px;
      }
      #top{
        text-align: center; 
      }
      #font1{
        color: #0b4675;
        font-size: 90px; 
      }
      `}</style>
      {/* Carousel */}
      <MDBCarousel showIndicators showControls fade id="home">
        <MDBCarouselItem itemId={1}>

          <img id='img1'
            src='https://media.licdn.com/dms/image/C5612AQFzPwEB4kgi9A/article-cover_image-shrink_720_1280/0/1652694565528?e=2147483647&v=beta&t=umcNFEllQ-BHvU081NJU5d5LY-2tokJAX89E6dx39MI'
            alt='First slide'
            className='d-block w-100'
          />
          <MDBCarouselCaption>
            <h5>Welcome to Medical Image Classification</h5>
            <p>Accurate and Efficient Image Classification</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img id='img1'
            src='https://www.ishaniayurveda.com/wp-content/uploads/2023/02/StrokeinWomenCausesRisksPrevention.jpg'
            alt='Second slide'
            className='d-block w-100'
          />
          <MDBCarouselCaption>
            <h5>Advanced AI Models</h5>
            <p>Powered by the latest in machine learning technology</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img id='img1'
            src='https://www.cdc.gov/stroke/media/images/2024/10/Signs-Symptoms-Stroke.jpg'            
            alt='Third slide'
            className='d-block w-100'
          />
          <MDBCarouselCaption>
            <h5>Efficient Diagnosis</h5>
            <p>Helping medical professionals with accurate diagnostics</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Features Section */}
      <MDBContainer className='my-5'>
        <section id='features'>
          <h2 className='text-center my-4'>Features</h2>
          <MDBRow>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardImage
                  src='https://img.freepik.com/free-vector/mini-people-with-computer-target_24877-56140.jpg?t=st=1725431787~exp=1725435387~hmac=b6b3a88ce892e743acd5aaf00e567d385795253ccda7e4bc0089381f09f4407a&w=740'
                  position='top'
                  alt='...'
                />
                <MDBCardBody>
                  <MDBCardTitle>High Accuracy</MDBCardTitle>
                  <MDBCardText>
                    Our models are trained on large datasets to ensure high accuracy in classification.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardImage
                  src='https://img.freepik.com/free-vector/fast-loading-concept-illustration_114360-738.jpg?ga=GA1.1.1925958745.1725277079&semt=ais_hybrid'
                  position='top'
                  alt='...'
                />
                <MDBCardBody>
                  <MDBCardTitle>Fast Processing</MDBCardTitle>
                  <MDBCardText>
                    We provide fast processing times to deliver quick results for better patient care.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4'>
              <MDBCard>
                <MDBCardImage
                  src='https://img.freepik.com/free-vector/data-protection-concept_1284-10819.jpg?ga=GA1.1.1925958745.1725277079&semt=ais_hybrid'
                  position='top'
                  alt='...'
                />
                <MDBCardBody>
                  <MDBCardTitle>Secure Data</MDBCardTitle>
                  <MDBCardText>
                    Your data is secure with us, following industry best practices for privacy and security.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      {/* About Section */}
      <MDBContainer className='my-5' id='about-us'>
        <section id='about'>
          <h2 className='text-center my-4'>About Us</h2>
          <p className='text-center'>
            We are college students actively solving real-world problems using AI/ML techniques.
            Our goal is to leverage the power of technology to make a positive impact in the medical field.
            Through our project, we aim to assist medical professionals by providing accurate and efficient 
            image classification solutions. 
          </p>
        </section>
      </MDBContainer>

      {/* Contact Section */}
      <MDBContainer className='my-5' id='contact-us'>
        <section id='contact'>
          <h2 className='text-center my-4'>Contact Us</h2>
          <MDBValidation className='row g-3'>
            <MDBValidationItem feedback='Please provide your name.' invalid>
              <MDBInput label='Your Name' id='name' type='text' required />
            </MDBValidationItem>
            <MDBValidationItem feedback='Please provide your email.' invalid>
              <MDBInput label='Your Email' id='email' type='email' required />
            </MDBValidationItem>
            <MDBValidationItem feedback='Please provide a message.' invalid>
              <MDBTextArea label='Your Message' id='message' rows='4' required />
            </MDBValidationItem>
            <div className='col-12'>
              <MDBBtn type='submit'>Submit</MDBBtn>
            </div>
          </MDBValidation>
        </section>
      </MDBContainer>
      </body>

      {/* Footer */}
      <MDBFooter bgColor='light' className='text-center text-lg-start'>
        <div className='text-center p-3'>
          © 2024 MedCura
        </div>
      </MDBFooter>
    </>
  );
};

export default HomePage;
