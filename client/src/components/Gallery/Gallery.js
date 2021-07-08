import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { getSingleFiles, getMultipleFiles } from "../../data/api";

const Gallery = ({ newAdded }) => {
  const [singleFiles, setsingleFiles] = useState([]);
  const [multipleFiles, setmultipleFiles] = useState([]);

  const getSingleFile = async () => {
    try {
      const files = await getSingleFiles();
      setsingleFiles(files);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllMultipleFiles = async () => {
    try {
      const files = await getMultipleFiles();
      setmultipleFiles(files);
      console.log(files);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleFile();
    getAllMultipleFiles();
    console.log("done");
  }, [newAdded]);
  console.log(singleFiles);
  return (
    <Container style={{ width: "95%" }} className="mt-4">
      <Row>
        <Col lg={5}>
          <Row>
            {singleFiles?.map((file, index) => (
              <Col lg={6} key={index}>
                <Card border="secondary" className="mb-3">
                  <img
                    src={`http://localhost:8080/${file.filePath}`}
                    height="200"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            {multipleFiles?.map((gallery, index) => (
              <Row key="index">
                <h4 className="text-dark text-gallery">{gallery.title}</h4>
                {gallery.files?.map((file, index) => (
                  <Col lg={4} key={index}>
                    <Card border="secondary" className="mb-3">
                      <img
                        src={`http://localhost:8080/${file.filePath}`}
                        height="150"
                        alt="img"
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
