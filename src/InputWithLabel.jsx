import { useEffect, useRef } from "react";


export function InputWithLabel(props){

    const inputRef = useRef();
    console.log(inputRef.current)
    
    useEffect(()=> {
        inputRef.current.focus()
    });


return(
    <>
    <label htmlFor="todoTitle">{props.children}</label>
    <input 
    value={props.todoTitle} 
    onChange={props.handleTitleChange} 
    type="text" 
    id="todoTitle" 
    name = "title" 
    ref={inputRef}

    
    />
    
    </>
);
}