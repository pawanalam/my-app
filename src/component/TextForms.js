
import React from 'react';
import { useState } from 'react';


export default function TextForms(props) {
    // hook
    const [text, setText] = useState();

    // Event listner Upper
    const handelUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }

    const handelOnChange = (event) => {
        // this event remove the value which assign in textarea
        setText(event.target.value)
        // console.log(event.target.value);

    }

    // Event for Lower 
    const handelLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    //clear text 
    const handelClear = () => {
        let newText = "";
        setText(newText);
    }

    // copy text 
    const handelCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <h2 htmlFor="exampleFormControlTextarea1"> {props.heading}</h2>
                    <textarea style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} onChange={handelOnChange} value={text} id="myBox" className="form-control" rows="8"></textarea>
                </div>

            </form>

            <div className='container '>

                <button onClick={handelUpClick} className='my-3 btn btn-primary'>Conver to UpperCase</button>
                <button onClick={handelCopy} className='my-3 mx-3 btn btn-primary '>Text copy</button>
                <button onClick={handelLoClick} className='my-3 mx-3 btn btn-primary '>Conver to LowerCase</button>
                <button onClick={handelClear} className='my-3 mx-3 btn btn-primary '>Clear text</button>

            </div>

            <div className='container my-3'>

                <h2>summary text</h2>
                {/* <p>{text.length} character and {text.split(" ").length} in textarea</p> */}

            </div>
        </>
    )
}
