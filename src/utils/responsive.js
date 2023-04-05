import { useMediaQuery } from 'react-responsive';

export const mobileResponsive = () =>
  useMediaQuery({
    query: '(min-width: 640px)'
  });
