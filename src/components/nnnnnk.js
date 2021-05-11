import React from "react";
const footerStyle = {
  backgroundColor: "#AE8FDC",
  
  fontSize: "20px",
  color: "pink",
  borderTop: "1px solid #e7e7e7",
  textAlign: "center",
  padding: "30px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "20px",
  width: "40%"
};


const phantomStyle = {
  display: "pink",
  padding: "20px",
  height: "120px",
  width: "100%"
};
const Footer = () => {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>
          <span>Leelawadee sudong<a className="App-link" href="http://cs.kmutnb.ac.th/">CS@KMUTNB</a></span>
          
      </div>
    </div>
  );
};
export default Footer;