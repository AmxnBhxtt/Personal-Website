// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Images array (replace these with the actual paths of your images)
const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Main App Component
const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <div className="container">
              {/* Left side content */}
              <div className="left">
                <h1 className="page-title">AMXNBHXTT</h1>
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
                  <h3>
                    <a href="https://depauledu-my.sharepoint.com/:b:/g/personal/abhatt5_depaul_edu/ESLN07wfDetGvrVr6C2dyicBu7YJ9ZyqkeGuT922uB2T9A?e=vDMlaW" target="_blank" rel="noopener noreferrer">
                      TECHNOLOGY INTERN ↗️
                    </a>
                  </h3>
                  <p>Kashiv BioSciences LLC.</p>
                  <hr />
                  <h3>
                    <a href="https://depauledu-my.sharepoint.com/:b:/g/personal/abhatt5_depaul_edu/ESLN07wfDetGvrVr6C2dyicBu7YJ9ZyqkeGuT922uB2T9A?e=vDMlaW" target="Resume.pdf" rel="noopener noreferrer">
                      BACKEND SYSTEMS ENGINEERING INTERN ↗️
                    </a>
                  </h3>
                  <p>IAMI Authentication LLC.</p>
                  <hr />
                  <h3>
                    <a href="https://github.com/AmxnBhxtt/Seoul-Bike-Sharing-Data-Analysis" target="_blank" rel="noopener noreferrer">
                      BIKE SHARING DATA ANALYSIS MODEL AND THESIS ↗️
                    </a>
                  </h3>
                  <p>Data Analysis · Data Modeling · Statistical Data Analysis · SAS · Oracle Database System · Big Data</p>
                  <hr />
                  <h3>
                    <a href="https://github.com/AmxnBhxtt/Live-Language-Translation-Device" target="_blank" rel="noopener noreferrer">
                      REAL-TIME LANGUAGE TRANSLATION DEVICE ↗️
                    </a>
                  </h3>
                  <p>Hardware Architecture · Python · Raspberry Pi · Google API · NLP (Natural Language Processing)</p>
                  <hr />
                  <h3>
                    <a href="https://github.com/AmxnBhxtt/IOS-Harmony-App" target="_blank" rel="noopener noreferrer">
                      HARMONY IOS APP ↗️
                    </a>
                  </h3>
                  <p>Software Architecture · Software Development Life Cycle · Swift · SwiftUI ·Git · GitHub</p>
                </div>

                <div className="featured-work">
                  <h2>SOCIALS & MORE</h2>
                </div>

                <div className="projects">
                  <h3>
                    <a href={"https://depauledu-my.sharepoint.com/:b:/g/personal/abhatt5_depaul_edu/ESLN07wfDetGvrVr6C2dyicBu7YJ9ZyqkeGuT922uB2T9A?e=vDMlaW"} target="_blank" rel="noopener noreferrer">
                      RESUME ↗️
                    </a>
                  </h3>
                  <p>Yes, it will pass through an ATS System!</p>
                  <hr />
                  <h3>
                    <a href="https://github.com/AmxnBhxtt" target="_blank" rel="noopener noreferrer">
                      GITHUB ↗️
                    </a>
                  </h3>
                  <p>Check out more projects!</p>
                  <hr />
                  <h3>
                    <a href="https://www.linkedin.com/in/amxnbhxtt/" target="_blank" rel="noopener noreferrer">
                      LINKEDIN ↗️
                    </a>
                  </h3>
                  <p>Yes, I do follow random people and call it "connections"</p>
                  <hr />
                  {/* Link to the Blog page */}
                  <h3>
                    <Link to="/blog">BLOG ↗️</Link>
                  </h3>
                  <p>Coming Soon !! It's for a class, don't worry!</p>
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
                    <h1>BE CURIOUS, NOT JUDGMENTAL</h1>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        
        {/* Blog Page Route */}
        <Route
          path="/blog"
          element={
            <div style={{color: "white", backgroundColor: "#333", padding: "40px", minHeight: "100vh" }}>
            <h1 style={{ fontSize: "2.5em" }}>Blog 1!</h1>
            <p style={{ fontSize: "1.5em" }}>For Project 1, initially, we had good teamwork that kept improving for more communication and timing. In the second week, 
              we had defined roles, and supporting each other in those roles went well. One point during the week, I noticed a few members were 
              well behind on the GitHub pushes, and I mentioned to them doing a push for them, even if their work was unfinished. Daily communication 
              started to be routine, and we completed our tasks a full day in advance—greatly improved from the first week.
We had also been better prepared for the meetings by viewing lectures and project requirements that had to be done. Transitioning to a phone communication 
and using when2meet.com allowed us to organize people's schedule and keep everyone in contact. We finished part B a day in advance, which allowed us to take 
the time and really polish everything well. Those team members who were familiar with testing supported the ones who were new to JUNIT, and we had
 initiated a rule that no one was allowed to push to main without permission to avoid any conflicts.
Our meetings had been a time to review project requirements and learn from past mistakes. Such as improving our wiki pages, going over what went wrong 
with part A put us in good shape to make improvements in part B. Ultimately, a few issues with test merges held us up by a day, but we learned starting projects 
earlier allows us to share updates sooner, rather than having delays related to problems like this.</p>
          
    
            <h1 style={{ fontSize: "2.5em" }}>Blog 2!</h1>
            <p style={{ fontSize: "1.5em" }}>With Project 2, the kick-off went smoother compared to Project 1, because it had already overcome the hurdles of setting up communication, laying foundational work such as setting up the GitHub wiki, and fleshing out individual roles. The meeting coordination went far more effectively, and full attendance was almost always the case, making aligning our work easier.

Part A was mostly straightforward; we kept the number of people making the spec comparatively small, to ensure it was consistent, and allowed the other roles to get an early start with their work. The key challenge in spec development was to provide enough detail so as to meet what we wanted, while leaving room for the implementation team to devise their own solutions in case anything came up. What we did was an approach: let team members not working on the spec review this as a small team, using their fresh perspectives to judge whether any information was missing, and if they thought they could implement it based purely on the spec.

Part B was a lot harder. We delegated design spec methods out pretty evenly across all team members, and each worked in separate branches. Unfortunately, there were lots of conflicts to meld everyone's branches together when the time came, since certain methods couldn't be tested effectively until others were complete.

Some were only merged for us to find out later that they could not compile, thus tracing it back to a branch. The other big blocker is that many of the test cases prepared before the methods were implemented didn't check correctly what a valid output should be; for example, a function returning -1 versus null. Besides the implementation problems, there were also a couple of inconsistencies and vague parts in the design document. We did, for example, handle fixed-size arrays ourselves since it wasn't specified in the design, but later the other team requested we change it after we were done.</p>
          </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
