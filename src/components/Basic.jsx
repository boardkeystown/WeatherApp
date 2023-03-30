import { React, useState, useEffect } from "react";


import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function kelvinToFahrenheit(K) {
  return (1.8 * (K - 273) + 32).toFixed(2);
}

export default function Basic({ props }) {
  return (
    <MDBContainer className="">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
            <MDBCardBody className="p-4">
              <div className="d-flex">
                <MDBTypography tag="h6" className="flex-grow-1">
                  {props.name}
                </MDBTypography>
                <MDBTypography tag="h6">15:07</MDBTypography>
              </div>
              <div className="d-flex flex-column text-center mt-5 mb-4">
                <MDBTypography
                  tag="h6"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: "#1C2331" }}
                >
                  {" "}
                  {kelvinToFahrenheit(props.main.temp)}°F{" "}
                </MDBTypography>
                <span className="small" style={{ color: "#868B94" }}>
                  {props.weather.main}-{props.weather.description}
                </span>
              </div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                  <div>
                    <MDBIcon
                      fas
                      icon="wind fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1"> Wind Speed: {props.wind.speed} km/h</span>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="tint fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1"> Humidity: {props.main.humidity}% </span>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="sun fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1"> Fees Like: {kelvinToFahrenheit(props.main.feels_like)}°F </span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                    width="100px"
                  />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}