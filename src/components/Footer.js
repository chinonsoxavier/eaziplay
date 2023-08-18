import React from 'react'

const Footer = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} className='footer' >
      <div className="flex aic jcsb" style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',width:'90%'}} >
        <div>
          <div>
            <img src={require(".././assets/logo.png")} style={{maxWidth:'120px'}} alt="" />
          </div>
          <p>Copywright 2023 Eaziplay. All rights reserved</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Product</p>
          <p>Individual</p>
          <p>Businesess</p>
          <p>Request a Demo</p>
          <p>Pricing</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Resourced</p>
          <p>FAQS</p>
          <p>Blog</p>
          <p>Career</p>
          <p>Customer services</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>Contact Us</p>
          <p>eaziplay@gmail.com</p>
          <p>+234 816 878 9518</p>
          <input style={{borderRadius:'16px',background:"#eee",height:'30px',border:'none',outline:'none',padding:'5px 10px'}} placeholder='your email address' />
          <p>Customer services</p>
        </div>
      </div>
    </div>
  );
}

export default Footer