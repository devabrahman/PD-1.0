const BgShadow = ({ className }) => {
  return (
    <div>
      <svg
        width="811"
        height="731"
        viewBox="0 0 811 731"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_8_918)">
          <path
            d="M171.865 358.386C202.298 592.383 233.84 646.211 416.079 478.08C509.878 310.821 621.656 413.74 729.182 277.607C502.446 -11.7778 494.66 383.599 391.986 369.065C265.228 351.123 178.419 67.1765 171.865 358.386Z"
            fill="url(#paint0_linear_8_918)"
            fillOpacity="0.4"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_8_918"
            x="0.644485"
            y="0.194901"
            width="899.758"
            height="747.025"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="85.6104" result="effect1_foregroundBlur_8_918" />
          </filter>
          <linearGradient
            id="paint0_linear_8_918"
            x1="164.69"
            y1="191.586"
            x2="692.812"
            y2="335.649"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.0238694" stopColor="#97E6FF" />
            <stop offset="0.452463" stopColor="#A690FC" />
            <stop offset="0.762123" stopColor="#FC96BB" stopOpacity="0.46" />
            <stop offset="1" stopColor="#FFC397" stopOpacity="0.28" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BgShadow;
