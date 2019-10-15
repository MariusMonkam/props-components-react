import React from 'react';

export default ({ firstname , note ,email }) => (
  <div classNamae="container">
  <h1>Hello <span className="badge-info rounded "> {firstname}</span>!</h1>
  <p className="alert alert-secondary text-info">I am thinking that {note} <br/>my Email is <span className="badge-primary">{email}</span></p>
  </div>
  );
