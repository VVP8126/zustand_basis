import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h5>
        <i className="fa fa-copyright" aria-hidden="true"></i>&#127;Footer component
      </h5>
      <h5>
        <i className="fa fa-map-marker" aria-hidden="true"></i>&#127;We are at map (fake)
      </h5>
      <h5>
        <i className="fa fa-registered" aria-hidden="true"></i>
        &#127;Not registered&#127;
        <i className="fa fa-trademark" aria-hidden="true"></i>
      </h5>
    </div>
  );
};

export default Footer;
