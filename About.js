import React from 'react';

function About() {
  const aboutInfoStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  };

  return (
    <div>
      <div>
      <h2>About Me</h2>
      <div style={aboutInfoStyle}>
        <p><strong>Name:</strong> Clara McKensey</p>
        <p><strong>Age:</strong> 26</p>
        <p><strong>Occupation:</strong> Interior Designer</p>
        <p><strong>University:</strong> Cornell University (Graduated 2011)</p>
        <p><strong>Visit Store:</strong> MC Kensey store, Cooper Square, 20 Cooper Square, New York, NY 10003</p>
        <p><strong>Awards:</strong></p>
        <ul>
          <li>American Society of Interior Designers (ASID) National Awards 2016</li>
          <li>Designer of Distinction Award 2017</li>
          <li>Design Innovation 2020</li>
        </ul>
          <h3>Experiences</h3>
          <div>
            <h4>Dolce & Gabbana "Fabric and Designs Collab" in 2017</h4>
            <img src="https://media.cntraveler.com/photos/5ae1ccbbea599a10d8c3a3c0/16:9/w_2560%2Cc_limit/Dolce&Gabbana_Boutique_Miami_Seasonal%2520(2).jpg" alt="D&G Collab" style={imageStyle} />
          </div>
          <div>
            <h4>SARWOKSI - STORE DESIGN IN 2021</h4>
            <img src="https://insideretail.asia/wp-content/uploads/2022/08/DSC5149_V2.png" alt="SARWOKSI Store Design" style={imageStyle} />
          </div>
          <div>
            <h4>"NEW YORK BEST STYLES" IN 2016</h4>
            <img src="https://image-url-for-NY-stylec:\Users\HP\AppData\Local\Temp\Untitled.jpgs.jpg" alt="New York Best Styles" style={imageStyle} />
            <img src="https://www.architectsnewyork.org/wp-content/uploads/2018/01/Interior-Designers_7_Featured_Jessica-Chastains-Residence.jpg" alt="New York Best Styles" style={imageStyle} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdKHIMs_bGeRp45p7zk-caDZP547O7cDV6qA_fpUQ5pfulO-mwi1zAaswTU8gDoOCxMo&usqp=CAUhttps://www.bestinteriordesigners.eu/wp-content/uploads/2013/07/High-Quality-Interior-Design-by-David-Hicks-934x516.jpg" alt="New York Best Styles" style={imageStyle} />
          </div>
          <div>
            <h4>"RESTAURANT IN NATURAL BEAUTY" PROJECT IN 2018</h4>
            <img src="https://image-url-for-restaurant-projecthttps://i.pinimg.com/originals/61/cd/89/61cd895daaeefbacf64b40386e2d76d0.jpg.jpg" alt="Restaurant in Natural Beauty" style={imageStyle} />
            
            <img src="https://media.architecturaldigest.com/photos/57fd170a06d6622c7c27fca6/4:3/w_660,h_495,c_limit/Screen%20Shot%202016-10-11%20at%2012.44.37%20PM.png" alt="Restaurant in Natural Beauty" style={imageStyle} />         
          </div>
        </div>
        <p>To view more works, <a href="/works">click here</a>.</p>
      </div>
    </div>
  );
}

export default About;
