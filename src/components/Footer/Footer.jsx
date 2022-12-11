


import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';











  
const Footer = () => {
    
    return (
      <MDBFooter className='bg-dark text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/julio.llinas' role='button'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/LlinasJulio' role='button'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://www.google.co.ve/' role='button'>
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/clanp/' role='button'>
              <MDBIcon fab icon='instagram' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/julio-cesar-llinas-ba65a6127/' role='button'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='https://github.com/jhonshua' role='button'>
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>
  <div>
            Realizado por Julio LLinas.
          </div>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
          
        </div>
      </MDBFooter>
    );
  }




export default Footer;