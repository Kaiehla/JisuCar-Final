"use client";

import React from "react";
import SignUpCard from "@/components/SignUpCard";
import signInBg from "@/public/assets/img/adminSignInBg.png";
import adminSignUpStyle from "@/styles/adminSignup.module.scss";
import { Row, Col, Container, Card } from "react-bootstrap";
import logoFullHd from "@/public/assets/logo/logo-symbol-text.png";
import Link from "@/components/Link";

//ADMIN TO PLS LANG WAG KA MALITO

function SignUpPage() {
  return (
    <main className={adminSignUpStyle.background} style={{ backgroundImage: `url(${signInBg.src})` }}>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={7} xxl={7}>
            <div className="mb-4 text-center">
              <img src={logoFullHd.src} width="35%" />
            </div>
            <Card className="rounded-4">
              <Card.Body className="p-5 pb-5">
                <p className="login-card-description">Welcome back, Admin!</p>
                <p>Your JisuCar journey continues. Let's make the most of your day, Fighting!</p>
                <SignUpCard role="admin"/>
                <p className="small text-danger mb-0">*Authorized Personnel Only</p>
              </Card.Body>
            </Card>
            <div className="d-flex justify-content-center mt-4">
              <Link href="/" className="link-white text-white">
                Go to JisuCar Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default SignUpPage;
