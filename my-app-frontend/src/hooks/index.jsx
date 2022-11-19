import {useState} from 'react';
// import React from 'react'
// import ReactDOM from 'react-dom'

export const useHandleChange = (initialValue) => {
 const [state, setState] = useState(initialValue);

    // const handleChange = e => setState(initialValue);
    const handleChange = e => setState(e.target.value);

    return [state, handleChange];
}