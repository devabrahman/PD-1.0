import React from 'react';
import { Link } from 'react-router-dom';

const HandelMailto = ({ mailto, children }) => {
  const mail = `mailto:${mailto}`;
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mail;
        e.preventDefault();
      }}>
      {children}
    </Link>
  );
};

export default HandelMailto;
