import React from 'react';

function Works() {
  const imageContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    margin: '10px',
    borderRadius: '5px',
  };

  return (
    <div>
      <h2>Works</h2>
      <div style={imageContainerStyle}>
        <div>
          <h4>Dolce & Gabbana "Fabric and Designs Collab" in 2017</h4>
          <img src="https://media.cntraveler.com/photos/5ae1ccbbea599a10d8c3a3c0/16:9/w_2560%2Cc_limit/Dolce&Gabbana_Boutique_Miami_Seasonal%2520(2).jpg" alt="D&G Collab" style={imageStyle} />
        </div>
        <div>
          <h4>SARWOKSI - STORE DESIGN IN 2021</h4>
          <img src="https://insideretail.asia/wp-content/uploads/2022/08/DSC5149_V2.png" alt="SARWOKSI Store Design" style={imageStyle} />
        </div>
        {/* Add the remaining images in a similar manner */}
      </div>
    </div>
  );
}

export default Works;