import { useEffect, useRef } from "react";

export function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []); // this effect only runs once



return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>
            
            <input

                value={props.todoTitle}
                onChange={props.handleTitleChange}
                type="text"
                id="todoTitle"
                name="title"
                ref={inputRef}
            />
        </>
    );
}
