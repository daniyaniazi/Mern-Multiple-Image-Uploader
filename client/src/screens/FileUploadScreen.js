import React, { useState, useEffect } from "react";
import { singleFileUpload, MultipleFileUpload } from "../data/api";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

const FileUploadScreen = ({ SetMsg }) => {
  const [singleFile, setsingleFile] = useState("");
  const [multipleFiles, setmultipleFiles] = useState("");
  const [title, settitle] = useState("");

  // single
  const singleFileChange = (e) => {
    setsingleFile(e.target.files[0]);
  };
  const UploadSingleFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", singleFile);
    const res = await singleFileUpload(formData);
    SetMsg();
  };

  // Multiple
  const onTitleChange = (e) => {
    settitle(e.target.value);
  };
  const MultipleFileChange = (e) => {
    setmultipleFiles(e.target.files);
  };
  const UploadMultipleFiles = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }

    const res = await MultipleFileUpload(formData);
    SetMsg();
  };

  return (
    <Container style={{ width: "95%" }} className="mt-5">
      <Row>
        <Col lg={5}>
          <h4>Uplaod an awesoem image</h4>
          <Form className="bg-light py-5" onSubmit={UploadSingleFile}>
            <Form.Group controlId="file" className="mb-3">
              <Row>
                <Form.Label column sm="5">
                  Select File
                </Form.Label>

                <Col sm="7">
                  <Form.Control type="file" onChange={singleFileChange} />
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col lg={7}>
          <h4>Create a Gallery</h4>

          <Form className="bg-light py-5" onSubmit={UploadMultipleFiles}>
            <Row>
              <Col lg={5}>
                <Form.Group as={Row} className="mb-3" controlId="title">
                  <Row>
                    <Form.Label column sm="6">
                      Title
                    </Form.Label>

                    <Col sm="6">
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        onChange={onTitleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col lg={7}>
                <Form.Group controlId="files" className="mb-3">
                  <Row>
                    <Form.Label column sm="5">
                      Select Multiple File
                    </Form.Label>

                    <Col sm="7">
                      <Form.Control
                        type="file"
                        onChange={MultipleFileChange}
                        multiple
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUploadScreen;
