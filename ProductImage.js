import React, { useState } from 'react';
import { Image, Carousel, Row, Col, Container } from 'react-bootstrap';
import img from '../Images/img.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import img5 from '../Images/img5.png';
import img6 from '../Images/img6.png';
import img7 from '../Images/img7.png';
import img8 from '../Images/img8.png';
import img9 from '../Images/img9.png';

function ProductImage() {
  const images = [
    img, img2, img3, img4, img5,
    img6, img7, img8, img9
  ];

  const [selectedImage, setSelectedImage] = useState(img);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCarouselIndex(index);
  };

  const handleSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex);
    setSelectedImage(images[selectedIndex]);
  };

  return (
    <Container>
      <Row>
        {/* Left Side - Small Images in two rows */}
        <Col md={4}>
          <Row className="mb-2">
            {images.slice(0, 6).map((image, index) => (
              <Col xs={6} key={index}>
                <Image
                  src={image}
                  alt={`Small Image ${index + 1}`}
                  className="img-fluid mb-2 custom-small-img"
                  onClick={() => handleImageClick(image, index)}
                />
              </Col>
            ))}
          </Row>
          <Row className="mb-2">
            {images.slice(6, 9).map((image, index) => (
              <Col xs={6} key={index + 6}>
                <Image
                  src={image}
                  alt={`Small Image ${index + 7}`}
                  className="img-fluid mb-2 custom-small-img"
                  onClick={() => handleImageClick(image, index + 6)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right Side - Big Image Carousel */}
        <Col md={8}>
          <Carousel
            indicators={true}
            controls={true}
            activeIndex={carouselIndex}
            onSelect={handleSelect}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="img-fluid custom-img-size"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductImage;
