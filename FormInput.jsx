import { useState } from "react";

export default function FormInput(props){

    const { label, errorMessage, onChange, id, ...inputProps} = props;

        const [focused, setFocused]= useState(false);

        const handleFocus = (e) => {
            setFocused(true);
        }

    return(

        <div className="formInput">
          <label>{label}</label>
          <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
          <span>{errorMessage} </span>
        </div>
    )
}

// {/* <input placeholder={props.placeholder} 
//             ref={props.refer}/> */}

//  {/* <label>{props.title}</label> */}
//  <input placeholder={props.placeholder} name={props.name}/>