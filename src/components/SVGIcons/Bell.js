const Bell = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <rect width="26" height="26" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_125" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_1_125"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Bell;
