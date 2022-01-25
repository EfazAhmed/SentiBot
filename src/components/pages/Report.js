import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Report = (props) => {

    const { state } = useLocation();

    return (
        <div>
          <h1>{state}</h1>
        </div>
    )
}

export default Report;
