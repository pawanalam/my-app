import React from 'react';
import { useState } from 'react';

export default function About() {

    //mode 
    const [myStyle, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
    })

    // button mode text 
    const [buttonText, SetText] = useState("Enable dark mode")

    // Event 
    const handelMode = () => {
        if (myStyle.color === "white") {

            setStyle({
                color: "black",
                backgroundColor: "white",

            })
            SetText("Enable dark mode")
        } else {
            setStyle({
                color: "white",
                backgroundColor: "black",
            })
            SetText("Enable light mode")
        }
    }
        return (
            <>
                {/* here put the style tag  */}
                <div style={myStyle} className='container my-3 mx-3' >
                    <h2>about Us</h2>
                    <div className="accordion" id="accordionExample">
                        <div style={myStyle} className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div style={myStyle} className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div style={myStyle} className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <button onClick={handelMode} className='btn btn-primary mx-3 my-2 '>{buttonText}</button>
                    </div>

                </div>

            </>
        )
    }