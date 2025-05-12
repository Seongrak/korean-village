import React, { useEffect, useRef, useState } from "react";

function IntroductionSection() {
  const introRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    const current = introRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section className="intro-section">
      <img src="../boss.jpeg" alt="Owner and Family" className="intro-bg" />
      <div className="intro-overlay">
        <div
          className={`intro-content ${isVisible ? "visible" : ""}`}
          ref={introRef}
        >
          <h2>More Than a Restaurant, It’s a Legacy</h2>
          <p>
            Korean Village has been proudly family-owned and operated since{" "}
            <strong>1978</strong>, built on generations of tradition, love, and
            resilience.
          </p>
          <p>
            Today, it continues under the care of <strong>Jason Lee</strong>,
            the son of our beloved founder, who honors her legacy with every
            dish and warm welcome.
          </p>
          <p>
            Whether you’re here for comforting Korean flavors or a sense of
            home, Jason and our team are here to serve — with pride, heart, and
            history.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
