import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutus.css"; // Custom CSS for additional styling
import img10 from '../Images/img10.png'; 
const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={img10} // Replace with the correct path
            alt="Baise Gaba"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Reena and Ruchi, the sister duo behind Baise Gaba, united their
            shared passion for fashion, design, and the desire to bring a fresh
            perspective. With a keen eye for perfectly balanced color palettes,
            fabrics, and designs, they strive to enhance femininity while
            prioritizing comfort.
          </p>
          <p>
            At the core of Baise Gaba's ideology is the intent to tell a story
            with every collection, seamlessly blending Rajasthani handcrafted
            techniques with in-house developed prints. This approach reflects
            the brand's commitment to preserving and celebrating the rich
            heritage of Indian craftsmanship.
          </p>
          <p>
            The name "Baise" in the Rajasthani dialect means "outfit," while
            "Gaba" represents "clothes," encapsulating the brand's essence.
            Baise Gaba also focuses on sustainable and ethical manufacturing
            practices, supporting local karigars and artisans, and pushing the
            boundaries of contemporary women's wear - from traditional to
            casual styles, imbued with a sense of comfort and ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

