import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor:'#343a40', color:"#ffc107"}} >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid >
          &copy; {new Date().getFullYear()} Copyright: <a> OMDB by Christian Chen</a>
        </MDBContainer>
       chenchristian7@gmail.com
      </div>
    </MDBFooter>
  );
}

export default FooterPage;