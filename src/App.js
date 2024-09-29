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
    }, 1500); // 3000 ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Left side */}
      <div className="left">
        <h1 className="page-title">AMXNBHXTT</h1> {/* Added title here */}
        
        <div className="about-section">
          <h3>
            🤖 A curious mind who enjoys crafting code and developing
            practical solutions. Navigating the evolving landscape of
            technology, I transform caffeine into elegant code. ☕
          </h3>
        </div>
        
        <div className="featured-work">
          <h2>FEATURED WORKS</h2>
        </div>
        
        <div className="projects">
          <h3><a href="'/Resume.pdf" target="_blank" rel="noopener noreferrer">TECHNOLOGY INTERN ↗️</a></h3>
          <p>Kashiv BioSciences LLC.</p>
          <hr />
          <h3><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">BACKEND SYSTEMS ENGINEERING INTERN ↗️</a></h3>
          <p>IAMI Authentication LLC.</p>
          <hr />
          <h3><a href="project1.pdf" target="_blank" rel="noopener noreferrer">BIKE SHARING DATA ANALYSIS MODEL AND THESIS ↗️</a></h3>
          <p>Data Analysis · Data Modeling · Statistical Data Analysis · SAS · Oracle Database System · Big Data</p>
          <hr />
          <h3><a href="https://github.com/AmxnBhxtt/Live-Language-Translation-Device" target="_blank" rel="noopener noreferrer">REAL-TIME LANGUAGE TRANSLATION DEVICE ↗️</a></h3>
          <p>Hardware Architecture · Python · Raspberry Pi · Google API · NLP (Natural Language Processing)</p>
          <hr />
          <h3><a href="https://github.com/AmxnBhxtt/IOS-Harmony-App" target="_blank" rel="noopener noreferrer">HARMONY IOS APP ↗️</a></h3>
          <p>Software Architecture · Software Development Life Cycle · Swift · SwiftUI ·Git · GitHub</p>
        </div>

        <div className="featured-work">
          <h2>SOCIALS & MORE</h2>
        </div>
        
        <div className="projects">
          <h3><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME ↗️</a></h3>
          <p>Yes, it will pass though an ATS System!</p>
          <hr />
          <h3><a href="https://github.com/AmxnBhxtt" target="_blank" rel="noopener noreferrer">GITHUB ↗️</a></h3>
          <p>Checkout more projects!</p>
          <hr />
          <h3><a href="https://www.linkedin.com/in/amxnbhxtt/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗️</a></h3>
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
