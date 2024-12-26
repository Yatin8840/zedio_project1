import React, { useEffect, useRef, useState } from "react";
import "./WorkingProcess.css"; // Import CSS file
import { FaStar } from "react-icons/fa";
import ContactInfo from "./ContactInfo";


const WorkingProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [clickedImage, setClickedImage] = useState(null); // State to track the clicked image
  const sectionRef = useRef(null);

  const testimonials = [
    {
      img: "https://zidio.in/assets/images/home-2/pintu.jpeg",
      name: "Mr. Ranjan Kumar Senapati",
      feedback:
        "Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn’t be happier with the results.",

      rating: 5,
    },
    {
      img: "https://zidio.in/assets/images/home-2/SaveInsta.App_452075928_18239507287281300_4779034483683661459_n.jpg",
      name: "Mr. Suraj Adhikari",
      feedback:
        "Working with Zidio was a game-changer for our business. Their expertise and attention to detail ensured that our project was not only completed on time but also surpassed our initial vision.",

      rating: 4,
    },
    {
      img: "https://zidio.in/assets/images/home-2/Dave_s_Music_400x400.jpg",
      name: "David",
      feedback:
        "The team at Zidio is exceptional. From start to finish, they demonstrated a deep understanding of our goals and provided invaluable guidance throughout the process. We highly recommend their services.",

      rating: 5,
    },
    {
      img: "https://zidio.in/assets/images/home-2/JnZPX-PG_400x400.jpg",
      name: "Andy Tessa",
      feedback:
        "Zidio’s commitment to excellence is unmatched. Their seamless working process and expert leadership delivered a final product that truly sets our business apart. We’re thrilled with the outcome.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Section is visible");
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0; // Initialize count

      const increment = Math.ceil(target / speed);

      const updateCount = () => {
        console.log(`Current count: ${count}, Target: ${target}`); // Log current and target values

        if (count < target) {
          count += increment;
          counter.innerText = Math.min(count, target);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };

      counter.innerText = 0; // Reset counter to 0 before starting
      updateCount(); // Start counting
    });
  }, [isVisible]);

  const handleMouseEnter = (desc, e) => {
    setDescription(desc);
    setIsHovering(true);
    const { clientX, clientY } = e;
    setPosition({ top: clientY, left: clientX });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleImageClick = (index) => {
    setClickedImage(index); // Update the clicked image index
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        size={20}
        color={i < rating ? "#FFD700" : "#e4e5e9"} // Gold for filled stars, light gray for empty
        style={{ marginRight: "5px" }}
      />
    ));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   }, 3000); // Change testimonial every 3 seconds

  //   return () => clearInterval(interval);
  // }, [testimonials.length]);

  return (
    <div
      ref={sectionRef}
      style={{ marginTop: "6px", padding: "5px 0", position: "relative" }}
    >
      {/* Image Wrapper with Positioning */}
      <div style={{ position: "relative", width: "100%", height: "auto" }}>
        <img
          src="https://zidio.in/assets/images/home-2/service-bg.png"
          alt="Working Process"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Counters Section Inside Image */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            padding: "30px 0",
          }}
        >
          {/* Counter Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <span className="counter" data-target="1000">
                1
              </span>
              <span>K+</span>
            </p>
            <p style={{ fontSize: "16px" }} className="font-light font-mono">
              Happy Customers
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <span className="counter" data-target="2000">
                2
              </span>
              <span>K+</span>
            </p>
            <p style={{ fontSize: "16px" }} className="font-light font-mono">
              Works Completed
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <span className="counter" data-target="99">
                99
              </span>
              <span>+</span>
            </p>
            <p style={{ fontSize: "16px" }} className="font-light font-mono">
              Expert Members
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>
              <span className="counter" data-target="100">
                100
              </span>
              <span>%</span>
            </p>
            <p style={{ fontSize: "16px" }} className="font-light font-mono">
              Satisfaction Rates
            </p>
          </div>
        </div>

        {/* H1 Positioned Below Counters Inside Image */}
        <h1
          style={{
            position: "absolute",
            top: "35%",
            width: "100%",
            textAlign: "center",
            color: "blue",
            fontFamily: "sans-serif",
            padding: "10px 0",
            fontSize: "20px",
            fontWeight: "normal",
          }}
        >
          Working Process <br />
          <br />
          <span
            style={{
              color: "aliceblue",
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            We Follow the Easy Working Steps
          </span>
        </h1>

        {/* Circular Images and Dotted Line */}
        <div
          className="circular-images-container"
          style={{ marginTop: "70px" }}
        >
          <div className={`dotted-circle ${isHovering ? "pause" : ""}`}></div>
          <div className="circular-image-wrapper">
            <img
              src="https://zidio.in/assets/images/home-2/process-1.png"
              alt="Step 1"
              className={`circular-image circle1 ${isHovering ? "pause" : ""}`}
              onMouseEnter={(e) =>
                handleMouseEnter(
                  <div>
                    <strong>Step 1</strong>
                    <br />
                    Identify your needs and objectives to create a tailored
                    strategy, ensuring all aspects align with your business
                    objectives.
                  </div>,
                  e
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <span className="image-number">1</span>
            <img
              src="https://zidio.in/assets/images/home-2/process-2.png"
              alt="Step 2"
              className={`circular-image circle2 ${isHovering ? "pause" : ""}`}
              onMouseEnter={(e) =>
                handleMouseEnter(
                  <div>
                    <strong>Step 2</strong>
                    <br />
                    Create a plan that outlines how to execute the strategy
                    effectively and deliver to success.
                  </div>,
                  e
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <span className="image-number">2</span>
            <img
              src="https://zidio.in/assets/images/home-2/process-3.png"
              alt="Step 3"
              className={`circular-image circle3 ${isHovering ? "pause" : ""}`}
              onMouseEnter={(e) =>
                handleMouseEnter(
                  <div>
                    <strong>Step 3</strong>
                    <br />
                    Execute and deliver the project with precision, ensuring it
                    meets your expectations and drives your success.
                  </div>,
                  e
                )
              }
              onMouseLeave={handleMouseLeave}
            />
            <span className="image-number">3</span>
          </div>
        </div>

        {/* Description Box */}
        {isHovering && (
          <div
            className="description-box"
            style={{
              top: position.top + 20,
              left: position.left + 20,
              width: "200px",
              height: "200px",
            }}
          >
            {description}
          </div>
        )}
      </div>
      <br />
      <br />
      {/*Testimonial Part*/}
      <div
        className="testimonial-container"
        style={{ position: "relative", textAlign: "center" }}
      >
        <img
          src="https://zidio.in/assets/images/home-1/testi-bg.jpg"
          alt="Testimonial Background"
          style={{ width: "100%", height: "auto" }}
        />

        <div
          className="testimonial-text"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#0066b2",
            fontSize: "30px",
            fontWeight: "extrabold",
            fontFamily: "fantasy",
          }}
        >
          Testimonials <br />
          <br />
          <span className="text-black">
            Customer’s Awesome Feedback About Our Services
          </span>
          {/* Testimonial Images */}
          <div
            className="image-container"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "90px",
              marginTop: "20px",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.img}
                alt={`Customer ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: clickedImage === index ? "5px solid blue" : "none", // Add border if clicked
                  transition: "border 0.3s", // Smooth transition
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(index)} // Set clicked image index
              />
            ))}
          </div>
          {/* Display Feedback of Selected Customer */}
          {clickedImage !== null && (
            <div
              className="testimonial-feedback"
              style={{
                marginTop: "60px",
                padding: "10px",
                backgroundColor: "#000",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
              }}
            >
              <h3 style={{ fontSize: "30px", color: "#fff" }}>
                {testimonials[clickedImage].name}
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                "{testimonials[clickedImage].feedback}"
              </p>
              {/* Star Rating */}
              <div
                className="star-rating"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {renderStars(testimonials[clickedImage].rating)}
              </div>
            </div>
          )}
        </div>
      </div>
      <br /><br />
      <div className="justify-center items-center">
        <ContactInfo />
        <br /><br /><br />
      </div>
    </div>
  );
};

export default WorkingProcess;
