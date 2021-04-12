import React from "react";
import Smurf from "./Smurf.js";

const Smurfs = (props) => {
  return props.data.map((item) => {
    return (
      <div>
        <Smurf key={item.id} smurf={item} />{" "}
        <button onClick={() => props.deleteSmurf(item.id)}>DELETE</button>
      </div>
    );
  });
};

export default Smurfs;