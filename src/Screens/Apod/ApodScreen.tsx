import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { commonAPI } from "../../Api/nasaApi";
import { apodInfo } from "../../interfaces/apod";

const ApodScreen = () => {
  const [apodData, setapodData] = useState<apodInfo>();
  const getApodData = async () => {
    const res = await commonAPI.get(
      `/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    setapodData(res.data);
  };

  useEffect(() => {
    getApodData();
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <Row className="text-center">
        <h1>{apodData?.title}</h1>
        <p className=""> {apodData?.copyright} </p>
      </Row>
      <Row className=" d-flex justify-content-center border shadow p-5">
        <Col xs={12} md={8} lg={6}>
          <img
            style={{ height: 400, width: 400 }}
            className="rounded"
            src={apodData?.url}
            alt={apodData?.title}
          />
        </Col>
        <Col
          xs={12}
          md={8}
          lg={6}
          className="d-flex flex-column align-items-center "
        >
          <h3>{apodData?.date}</h3>
          <div>{apodData?.explanation}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ApodScreen;
