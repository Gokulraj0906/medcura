import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBSpinner,
  MDBRow,
  MDBCol,
  MDBTypography
} from 'mdb-react-ui-kit';
import MyNavbar from './Navbar';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [diseaseMessage, setDiseaseMessage] = useState('');
  const [tips, setTips] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', image); // Ensure 'file' matches the Flask key

    try {
      const response = await axios.post('http://127.0.0.1:5000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const result = response.data;
      setResponseMessage(result.prediction ? `Prediction: ${result.prediction}` : 'Unexpected response from server.');
      setDiseaseMessage(result.prediction ? 'Tips and Tricks:' : '');
      setTips(result.tips || ''); // Assuming result.tips contains recommendations

    } catch (error) {
      console.error('Upload error:', error);
      setResponseMessage(`Error uploading image: ${error.response?.data?.error || error.message}`);
      setDiseaseMessage('');
      setTips('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <MyNavbar/>
    <MDBContainer className="my-5">
      <MDBCard>
        <div id="div1">
        <MDBCardBody>
          <MDBCardTitle className="text-center mb-4">Upload Medical Image</MDBCardTitle>
          <MDBRow>
            <MDBCol md="6" className="mx-auto">
              <MDBInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-3"
              />
              {imagePreview && (
                <div className="text-center mb-3">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="img-fluid rounded"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
              <MDBBtn
                onClick={handleUpload}
                disabled={loading}
                className="w-100"
                color="primary"
              >
                {loading ? <MDBSpinner size="sm" /> : 'Upload'}
              </MDBBtn>
              {responseMessage && (
                <div className="mt-3 text-center">
                  <MDBTypography tag="p" color={diseaseMessage ? 'danger' : 'success'}>
                    {responseMessage}
                  </MDBTypography>
                </div>
              )}
              {diseaseMessage && (
                <div className="mt-3 text-center">
                  <MDBTypography tag="h5" color="warning">
                    {diseaseMessage}
                  </MDBTypography>
                  <MDBTypography tag="p">
                    {tips}
                  </MDBTypography>
                </div>
              )}
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        </div>
      </MDBCard>
      <style>{`
      #div1{
        margin-top: 200px;
        padding: 20px;
      }
      .img-fluid {
        border: 1px solid #ddd;
        padding: 5px;
        border-radius: 5px;
      }
      `}</style>
    </MDBContainer>
    </>
  );
};

export default ImageUpload;
