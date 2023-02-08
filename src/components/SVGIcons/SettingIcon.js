import PropTypes from 'prop-types';

const SettingIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.98236 9.635V1.25C2.98236 1.05109 2.90334 0.860322 2.76269 0.71967C2.62204 0.579018 2.43127 0.5 2.23236 0.5C2.03345 0.5 1.84268 0.579018 1.70203 0.71967C1.56138 0.860322 1.48236 1.05109 1.48236 1.25V9.635C1.04799 9.79265 0.672703 10.0802 0.407489 10.4586C0.142275 10.837 0 11.2879 0 11.75C0 12.2121 0.142275 12.663 0.407489 13.0414C0.672703 13.4198 1.04799 13.7073 1.48236 13.865V14.75C1.48236 14.9489 1.56138 15.1397 1.70203 15.2803C1.84268 15.421 2.03345 15.5 2.23236 15.5C2.43127 15.5 2.62204 15.421 2.76269 15.2803C2.90334 15.1397 2.98236 14.9489 2.98236 14.75V13.865C3.41672 13.7073 3.79201 13.4198 4.05723 13.0414C4.32244 12.663 4.46472 12.2121 4.46472 11.75C4.46472 11.2879 4.32244 10.837 4.05723 10.4586C3.79201 10.0802 3.41672 9.79265 2.98236 9.635ZM2.23236 12.5C2.03345 12.5 1.84268 12.421 1.70203 12.2803C1.56138 12.1397 1.48236 11.9489 1.48236 11.75C1.48236 11.5511 1.56138 11.3603 1.70203 11.2197C1.84268 11.079 2.03345 11 2.23236 11C2.43127 11 2.62204 11.079 2.76269 11.2197C2.90334 11.3603 2.98236 11.5511 2.98236 11.75C2.98236 11.9489 2.90334 12.1397 2.76269 12.2803C2.62204 12.421 2.43127 12.5 2.23236 12.5Z"
        fill="#505050"
      />
      <path
        d="M13.4824 8.75C13.4811 8.28579 13.3362 7.83335 13.0677 7.4547C12.7991 7.07605 12.42 6.78973 11.9824 6.635V1.25C11.9824 1.05109 11.9033 0.860322 11.7627 0.71967C11.622 0.579018 11.4313 0.5 11.2324 0.5C11.0334 0.5 10.8427 0.579018 10.702 0.71967C10.5614 0.860322 10.4824 1.05109 10.4824 1.25V6.635C10.048 6.79265 9.6727 7.08022 9.40749 7.45862C9.14228 7.83703 9 8.28791 9 8.75C9 9.21209 9.14228 9.66297 9.40749 10.0414C9.6727 10.4198 10.048 10.7073 10.4824 10.865V14.75C10.4824 14.9489 10.5614 15.1397 10.702 15.2803C10.8427 15.421 11.0334 15.5 11.2324 15.5C11.4313 15.5 11.622 15.421 11.7627 15.2803C11.9033 15.1397 11.9824 14.9489 11.9824 14.75V10.865C12.42 10.7103 12.7991 10.4239 13.0677 10.0453C13.3362 9.66665 13.4811 9.21421 13.4824 8.75ZM11.2324 9.5C11.0334 9.5 10.8427 9.42098 10.702 9.28033C10.5614 9.13968 10.4824 8.94891 10.4824 8.75C10.4824 8.55109 10.5614 8.36032 10.702 8.21967C10.8427 8.07902 11.0334 8 11.2324 8C11.4313 8 11.622 8.07902 11.7627 8.21967C11.9033 8.36032 11.9824 8.55109 11.9824 8.75C11.9824 8.94891 11.9033 9.13968 11.7627 9.28033C11.622 9.42098 11.4313 9.5 11.2324 9.5Z"
        fill="#505050"
      />
      <path
        d="M8.98241 2.75046C8.98357 2.3377 8.87117 1.93257 8.6575 1.57941C8.44382 1.22625 8.13712 0.938679 7.77096 0.748159C7.40479 0.557639 6.99327 0.471515 6.58144 0.499213C6.1696 0.526911 5.77332 0.667364 5.43597 0.9052C5.09861 1.14304 4.83318 1.46909 4.66872 1.84768C4.50427 2.22626 4.44712 2.6428 4.50354 3.05169C4.55996 3.46058 4.72777 3.84607 4.98861 4.16598C5.24945 4.48588 5.59326 4.72787 5.98241 4.86546V14.7505C5.98241 14.9494 6.06143 15.1401 6.20208 15.2808C6.34274 15.4214 6.5335 15.5005 6.73241 15.5005C6.93133 15.5005 7.12209 15.4214 7.26274 15.2808C7.4034 15.1401 7.48241 14.9494 7.48241 14.7505V4.86546C7.92008 4.71072 8.29917 4.42441 8.56771 4.04576C8.83626 3.66711 8.98111 3.21467 8.98241 2.75046ZM6.73241 3.50046C6.5335 3.50046 6.34274 3.42144 6.20208 3.28079C6.06143 3.14014 5.98241 2.94937 5.98241 2.75046C5.98241 2.55155 6.06143 2.36078 6.20208 2.22013C6.34274 2.07948 6.5335 2.00046 6.73241 2.00046C6.93133 2.00046 7.12209 2.07948 7.26274 2.22013C7.4034 2.36078 7.48241 2.55155 7.48241 2.75046C7.48241 2.94937 7.4034 3.14014 7.26274 3.28079C7.12209 3.42144 6.93133 3.50046 6.73241 3.50046Z"
        fill="#505050"
      />
    </svg>
  );
};

export default SettingIcon;

SettingIcon.propTypes = {
  className: PropTypes.string.isRequired
};
