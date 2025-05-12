import React from "react";

function HighlightSection() {
  return (
    <footer className="highlight-footer">
      <p>
        <strong>Hours:</strong> Sun – Thurs: 12:00 pm – 9:45 pm
        <br />
        Fri – Sat: 12:00 pm – 10:15 pm
        <br />
        Mon: Closed
      </p>
      <p>
        <strong>Address:</strong> 628 Bloor St W, Toronto, ON M6G 1K7
      </p>
      <p>
        <strong>Phone:</strong> (416) 536-8361
      </p>
      <p style={{ textAlign: "center", color: "#aaa", fontSize: "0.9rem" }}>
        Follow us on{" "}
        <a
          href="https://www.instagram.com/koreanvillageto/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f66" }}
        >
          @koreanvillageto
        </a>{" "}
        to see our latest dishes and updates!
      </p>
      <div className="highlight-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2124864382636!2d-79.41697402371477!3d43.664550451696506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b348d87c95f15%3A0xebee1a58ba2df016!2sKorean%20Village%20Restaurant!5e0!3m2!1sen!2sca!4v1747023336678!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Korean Village Map"
        ></iframe>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Korean Village Restaurant. All rights
        reserved.
      </p>
    </footer>
  );
}

export default HighlightSection;
