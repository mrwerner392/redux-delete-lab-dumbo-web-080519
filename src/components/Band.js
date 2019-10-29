import React, { Component } from 'react';

const Band = props => {

    return(
      <div>
        <li><span>{props.band.name}</span><button onClick={() => props.deleteBand(props.band.id)}></button></li>
      </div>
    );
};

export default Band;
