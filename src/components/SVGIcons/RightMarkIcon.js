import React from 'react';

const RightMarkIcon = () => {
  return (
    <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_208_524)">
        <rect x="9" y="7" width="20" height="20" rx="7" fill="url(#paint0_radial_208_524)" />
      </g>
      <g filter="url(#filter1_d_208_524)">
        <rect
          x="6"
          y="4"
          width="26"
          height="25"
          rx="7"
          fill="#40FF6A"
          fillOpacity="0.3"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M15 16.8696L18.0857 20L24 14"
        stroke="white"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_208_524"
          x="3"
          y="3"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.536042 0 0 0 0 0.688975 0 0 0 0 0.775 0 0 0 0.7 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_208_524" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_208_524"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_208_524"
          x="0"
          y="0"
          width="42"
          height="41"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.536042 0 0 0 0 0.688975 0 0 0 0 0.775 0 0 0 0.1 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_208_524" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_208_524"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_208_524"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.7778 11.4828) rotate(48.6283) scale(20.6776 21.3113)">
          <stop stopColor="#53FC9F" />
          <stop offset="0.45859" stopColor="#45E882" />
          <stop offset="1" stopColor="#40DB8D" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default RightMarkIcon;
