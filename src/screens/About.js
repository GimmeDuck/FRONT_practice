import React from "react";

const about = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div>
        <h1>About</h1>
      </div>
      <iframe
        src="https://opensea.io/collection/moonbears-solana?embed=true"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default about;
