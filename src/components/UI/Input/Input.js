import React, { useRef, useEffect } from 'react';

import classes from './Input.module.css';

//we use ref hook to reference to the input component so that we can set focus on it if email is invalid
const Input = (props) => {
  
  const inputRef = useRef();
  
  //useEffect runs after the component is rendered for the first time
  useEffect(() => {
    inputRef.current.focus();
  }, []);
 

  return <div
    className={`${classes.control} ${
      props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
  
  </div>;
};

export default Input;