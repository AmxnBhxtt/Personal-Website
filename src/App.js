import React, { useState, useEffect } from "react";
import "./App.css";

const images = [
  "img1.jpg", // Replace these with the actual paths of your images
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000 ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Left side */}
      <div className="left">
        <h1 className="page-title">AMXNBHXTT</h1> {/* Added title here */}
        
        <div className="about-section">
          <h3>
            🤖 I’m a curious mind who enjoys crafting code and developing
            practical solutions. Navigating the evolving landscape of
            technology, I transform caffeine into elegant code. ☕
          </h3>
        </div>
        
        <div className="featured-work">
          <h2>FEATURED WORKS</h2>
        </div>
        
        <div className="projects">
          <h3>TECHNOLOGY INTERN ↗️</h3>
          <p>Did a lot of work</p>
          <hr />
          <h3>BACKEND SYSTEMS ENGINEERING INTERN ↗️</h3>
          <p>Did a lot of work</p>
          <hr />
          <h3>BIKE SHARING DATA ANALYSIS MODEL AND THESIS ↗️</h3>
          <p>SAS, Python, Oracle Database System, Big Data</p>
          <hr />
          <h3>REAL-TIME LANGUAGE TRANSLATION DEVICE ↗️</h3>
          <p>Python, Raspberry Pi, Google API, NLP (Natural Language Processing)</p>
          <hr />
          <h3>HARMONY IOS APP ↗️</h3>
          <p>Swift, SwiftUI, XCODE, Git, GitHub</p>
        </div>

        <div className="featured-work">
          <h2>SOCIALS & MORE</h2>
        </div>
        
        <div className="projects">
          <h3>RESUME ↗️</h3>
          <p>Yes, it will pass though an ATS System!</p>
          <hr />
          <h3>LINKEDIN ↗️</h3>
          <p>Yes, I do follow random people and call it "connections"</p>
          <hr />
          <h3>BLOG ↗️</h3>
          <p>Its for a class, don't worry!</p>
        </div>
      </div>

      {/* Right side with rotating images */}
      <div className="right">
        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt="Rotating"
            className="background-image"
          />
          <div className="text-overlay">
            <h1>BE CURIOUS, NOT JUDGEMENTAL</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
