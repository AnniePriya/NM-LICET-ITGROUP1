import React from 'react';

function Contact() {
  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <div>
      <h2>Contact</h2>
      <div style={contactInfoStyle}>
        <p><span style={labelStyle}>Name:</span> Clara McKensey</p>
        <p><span style={labelStyle}>Age:</span> 26</p>
        <p><span style={labelStyle}>Occupation:</span> Interior Designer</p>
        <p><span style={labelStyle}>Experience:</span> 5 years</p>
        <p><span style={labelStyle}>Contact:</span> +123627263247</p>
        <p><span style={labelStyle}>Email:</span> claraworks@email</p>
        <p><span style={labelStyle}>LinkedIn:</span> <a href="linkend/claramckensy" style={linkStyle}>Clara McKensey</a></p>
      </div>
    </div>
  );
}

export default Contact;
