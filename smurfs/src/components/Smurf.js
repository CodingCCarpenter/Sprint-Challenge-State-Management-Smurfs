import React from "react";

const Smurf = ({ smurf }) => {
  return (
    <div className='smurf'>
      <h1>{smurf.name}</h1>
      <p>Height: {smurf.height}</p>
      <p>Age: {smurf.age}</p>
    </div>
  );
};

export default Smurf;