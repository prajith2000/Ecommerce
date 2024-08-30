import React from 'react';
import { Container } from 'react-bootstrap';

// Define a functional component called Header
function Header() {
  // Return a Container component with a flexbox layout, centered vertically and horizontally, and a padding of 3
  return (
    <Container className="d-flex justify-content-between align-items-center py-3">
      
      <h1>NIKSHI COUTURE</h1>
    </Container>
  );
}

// Export the Header component as the default export of the module
export default Header;