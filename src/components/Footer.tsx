
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <DotLottieReact
        src="https://lottie.host/bfba8e4e-66fb-4431-b712-fb8d0ecc9bb8/ek2J69DhsA.lottie"
        loop
        autoplay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.35,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", width: "100%" }}>
        <div className="footer-logo">
          <h2 className="footer-title">
            Code<span className="logo-two">2</span>Z
          </h2>
          <div className="footer-bar" />
        </div>
        <p className="footer-tagline">
          Your trusted partner for professional web and app development
        </p>
        <div className="footer-links">
          {["Home", "Projects", "Services", "Contact"].map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="footer-social">
          {[
            {
              href: "https://github.com",
              title: "GitHub",
              svgPath:
                "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
            },
            {
              href: "https://linkedin.com",
              title: "LinkedIn",
              svgPath:
                "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z",
            },
            {
              href: "https://facebook.com",
              title: "Facebook",
              svgPath:
                "M22.675 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.406.593 24 1.324 24h11.494v-9.294H9.691v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.763v2.312h3.592l-.468 3.622h-3.124V24h6.127c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.406 0 22.675 0z",
            },
            {
              href: "https://twitter.com",
              title: "Twitter",
              svgPath:
                "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5",
            },
            {
              href: "mailto:info@code2z.com",
              title: "Email",
              svgPath:
                "M2 4h20v16H2z M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            },
          ].map(({ href, title, svgPath }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d={svgPath} fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            Created by <span className="footer-brand">| Code<span className="logo-two">2</span>Z 2025 |</span> © all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
