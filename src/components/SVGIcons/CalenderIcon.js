import PropTypes from 'prop-types';
const CalenderIcon = ({ className }) => {
  return (
    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.875 2.5H2.125C1.43464 2.5 0.875 3.05964 0.875 3.75V12.5C0.875 13.1904 1.43464 13.75 2.125 13.75H10.875C11.5654 13.75 12.125 13.1904 12.125 12.5V3.75C12.125 3.05964 11.5654 2.5 10.875 2.5Z"
        stroke="#848484"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path d="M9 1.25V3.75" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 1.25V3.75" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M0.875 6.25H12.125" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CalenderIcon;

CalenderIcon.propTypes = {
  className: PropTypes.string.isRequired
};
