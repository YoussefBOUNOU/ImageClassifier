import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "./Classifier.css";
import { Spinner, Button, Alert, Image } from "react-bootstrap";
import axios from "axios";

const Classifier = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentImage, setRecentImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFiles([]);
    setIsLoading(true);
    setRecentImage(null);
    setErrorMessage(null);
    loadImage(acceptedFiles);
  };

  const loadImage = (files) => {
    setTimeout(() => {
      setFiles(files);
      setIsLoading(false);
    }, 1000);
  };

  const sendImage = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    const formData = new FormData();
    formData.append("picture", files[0], files[0].name);

    try {
      const createResp = await axios.post(
        "/api/image/create/",
        formData,
        {
          headers: {
            "accept": "application/json",
            "content-type": "multipart/form-data",
          },
        }
      );

      fetchImageDetails(createResp.data.id);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setErrorMessage("Failed to upload image. Please try again.");
    }
  };

  const fetchImageDetails = async (imageId) => {
    try {
      const resp = await axios.get(`/api/image/${imageId}`, {
        headers: {
          accept: "application/json",
        },
      });

      setRecentImage(resp);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setErrorMessage("Failed to retrieve image details. Please try again.");
    }
  };

  const fileList = files.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <Dropzone onDrop={onDrop} accept={{ 'image/png': [], 'image/jpeg': [] }}>
      {({ isDragActive, getRootProps, getInputProps }) => (
        <section className="container">
          <div {...getRootProps({ className: "dropzone back" })}>
            <input {...getInputProps()} />
            <i className="fa fa-cloud-upload" aria-hidden="true" style={{ fontSize: 100, color: "#AD88C6",marginBottom:'5px' }}></i>
                        <p>
              {isDragActive ? "Drop an image" : "click to select a file"}
            </p>
          </div>
          <aside>
            <ul>{fileList}</ul>
          </aside>

          {files.length > 0 && (
            <Button variant="info" size="lg" className="mt-3" style={{marginBottom:'20px',backgroundColor:"#AD88C6"}} onClick={sendImage}>
              Select Image
            </Button>
          
          )}
          <br/>

          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {errorMessage && (
            <Alert variant="danger" className="mt-3">
              {errorMessage}
            </Alert>
          )}

          {recentImage && (
            <React.Fragment>
              <Image
                className="justify-content-center mb-2"
                src={`http://127.0.0.1:8000${recentImage.data.picture}`}
                height="200"
                rounded
              />
              <Alert variant="primary" style={{backgroundColor:"#E1AFD1",color:"#ffffff",fontSize:"18px"}}>{recentImage.data.classified}</Alert>
            </React.Fragment>
          )}
        </section>
      )}
    </Dropzone>
  );
};

export default Classifier;
