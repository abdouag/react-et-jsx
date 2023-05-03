import React from 'react';

function FullName() {
  const InstagramProfile = 'https://instagram.com/_abdou_aziiz_g1?igshid=YmMyMTA2M2Y=';

  const iconStyle = {
    color: 'blue',
  };

  return (
    <h1>
      Abdou Aziz Gueye
      <a href={InstagramProfile} target="_blank" rel="noopener noreferrer">
        <i style={iconStyle} className="bi bi-instagram"></i>
      </a>
    </h1>
  );
}

export default FullName;
