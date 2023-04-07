const GradientDefs = () => (
  <defs>
    <linearGradient id="nav-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop stopColor="#fbb034" offset="0%" />
      <stop stopColor="#ffdd00" offset="74%" />
    </linearGradient>
  </defs>
);

function MobileNavToggle({ isOpen, toggle }) {
  return (
    <div
      className={`navbar-toggler toggler-icon ${
        isOpen ? "toggler-open" : ""
      }`}
      onClick={toggle}
    >
      {isOpen ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GradientDefs />
          <path
            d="M18 6L6 18"
            stroke="url(#nav-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="url(#nav-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className={`${isOpen ? "toggler-open" : ""}`}
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GradientDefs />
          <rect
            className="line line-1"
            x="4"
            y="6"
            width="16"
            height="2"
            fill="url(#nav-gradient)"
          />
          <rect
            className="line line-2"
            x="4"
            y="11"
            width="16"
            height="2"
            fill="url(#nav-gradient)"
          />
          <rect
            className="line line-3"
            x="4"
            y="16"
            width="16"
            height="2"
            fill="url(#nav-gradient)"
          />
        </svg>
      )}
    </div>
  );
}

export default MobileNavToggle;