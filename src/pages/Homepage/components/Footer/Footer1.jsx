import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { IoHomeSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaGithub } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

const Footer1 = () => {
  const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',  // 기본 텍스트 색상 흰색
  };

  const iconStyle = {
    color: '#3498db', // 푸른색 계열
    marginRight: '1rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    color: '#ddd',
  };

  const sectionStyle = {
    marginTop: '1rem',
    borderTop: '1px solid #fff',
    paddingTop: '1rem',
  };

  const productsStyle = {
    color: '#fff',
  };

  const usefulLinksStyle = {
    color: '#8e44ad', // 보라색
  };

  const contactStyle = {
    color: '#2980b9', // 파란색
  };

  const flimFilterStyle = {
    color: '#3498db', // 푸른색 계열
  };

  const copyrightBgStyle = {
    backgroundColor: '#222', // 검정색과 가까운 색
  };

  return (
    <MDBFooter style={footerStyle} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{ color: '#fff' }}> © Get connected with us on social networks:</span>
        
        </div>

        <div>
          <a href='' style={iconStyle}>
            <FaFacebook />
          </a>
          <a href='' style={iconStyle}>
            <FaTwitter />
          </a>
          <a href='' style={iconStyle}>
            <FaGoogle />
          </a>
          <a href='' style={iconStyle}>
            <FaInstagram />
          </a>
          <a href='' style={iconStyle}>
            <FaGithub />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={flimFilterStyle}>
                <Link to={'/'} style={linkStyle}>
                  <BiCameraMovie style={iconStyle} />
                </Link>
                FlimFilter
              </h6>
              <p style={{ color: '#fff' }}>
              Our site can help people find information about current or past movies easily.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' style={sectionStyle}>
              <h6 className='text-uppercase fw-bold mb-4' style={productsStyle}>Products</h6>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = productsStyle.color}>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = productsStyle.color}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = productsStyle.color}>
                  Vue
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={sectionStyle}>
              <h6 className='text-uppercase fw-bold mb-4' style={usefulLinksStyle}>Useful links</h6>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = usefulLinksStyle.color}>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = usefulLinksStyle.color}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' style={linkStyle} onMouseEnter={e => e.target.style.color = linkHoverStyle.color} onMouseLeave={e => e.target.style.color = usefulLinksStyle.color}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' style={sectionStyle}>
              <h6 className='text-uppercase fw-bold mb-4' style={contactStyle}>Contact</h6>
              <p style={{ color: '#fff' }}>
                <IoHomeSharp style={iconStyle} />
                New York, NY 10012, US
              </p>
              <p style={{ color: '#fff' }}>
                <MdEmail style={iconStyle} />
                tjsdudtbvj12@naver.com
              </p>
              <p style={{ color: '#fff' }}>
                <BsFillTelephoneFill style={iconStyle} /> +82-10-8753-2616
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={copyrightBgStyle}>
        
        <a href='https://mdbootstrap.com/' style={linkStyle}>
        © 2024 Legendary Movie Search Site : FlimFilter.com 
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer1;
