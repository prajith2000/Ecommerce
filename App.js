
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductImage from './Components/ProductImage';
import ProductDetails from './Components/ProductDetails';
import ProductDescription from './Components/ProductDescription';
import Aboutus from './Components/Aboutus';
import  Contactus from'./Components/Contactus';
import FAQ from './Components/FAQ';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container className="mt-4">
          <Routes>
            <Route 
              path="/Product" 
              element={
                <Row>
                  <Col md={6}>
                    <ProductImage />
                  </Col>
                  <Col md={6}>
                    <ProductDetails />
                    <ProductDescription />
                  </Col>
                </Row>
              } 
            />
              
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
