import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import footerStyles from "@/styles/footer.module.scss";
import Image from "next/image";
import footerbg from "@/public/assets/img/footerbg.png";
import horilogo from "@/public/assets/logo/logo-symbol-text.png";
import { Row, Col, Container } from "react-bootstrap";
import { GeoAlt, Envelope, Telephone, Facebook, Instagram } from "react-bootstrap-icons";
import PrivacyPolicyModal from "@/components/PrivacyPolicyModal";
import TermsOfServiceModal from "@/components/TermsOfServiceModal";
import { color } from "chart.js/helpers";

function CustomFooter() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: '#141414'
      }}
    >
      <Container className={footerStyles.pad}>
        {/* logo */}
        <Row className="justify-content-center">
          <Col lg={12} className="d-flex justify-content-center">
            <Image src={horilogo} alt="Horizontal Logo" height={100} width={92} />
          </Col>
        </Row>
        <br />

        {/* contact details */}
        <Row className="d-flex text-center align-items-center">
          <Col lg={3}>
            <p className={footerStyles.footerWhite}>
              <GeoAlt color="#198754" /> &nbsp; Caloocan, Philippines, 1400
            </p>
          </Col>

          <Col lg={3}>
            <p className={footerStyles.footerWhite} onClick={() => window.location.href = `mailto:support@jisucar.com`} style={{cursor: "pointer"}}>
              <Envelope color="#198754" /> &nbsp; support@jisucar.com
            </p>
          </Col>

          <Col lg>
            <p className={footerStyles.footerWhite} onClick={() => window.location.href = `tel:09234567890`} style={{cursor: "pointer"}}>
              <Telephone color="#198754" /> &nbsp; 0923 456 7890
            </p>
          </Col>

          <Col lg>
            <p className={footerStyles.footerWhite} onClick={() => window.open('https://www.facebook.com/', '_blank')} style={{cursor: "pointer"}}>
              <Facebook color="#198754" /> &nbsp; JisuCar Philippines
            </p>
          </Col>

          <Col lg>
            <p className={footerStyles.footerWhite} onClick={() => window.open('https://www.instagram.com/', '_blank')} style={{cursor: "pointer"}}>
              <Instagram color="#198754" /> &nbsp; jisucarph
            </p>
          </Col>
        </Row>
        <br />

        {/* terms of services and privacy policy */}
        <Row>
          <Col lg={12} className="text-center">
            <style type="text/css">
              {`
                a {
                  color: #fff;
                  cursor: pointer;
                }
              `}
            </style>
            <TermsOfServiceModal />
            <PrivacyPolicyModal />
          </Col>
        </Row>
        <br />

        {/* copy right */}
        <Row>
          <Col lg={12} className="text-center">
            <p className={footerStyles.footerYellow}>Copyright &copy; 2020 All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default CustomFooter;
