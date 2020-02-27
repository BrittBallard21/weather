import React from 'react';

const Form = ({zipCodeBox, setZipCodeBox, submitHandler}) => {

    const INPUTSTYLE ={
        width: "100%",
        padding: "6px 15px",
        boxSizing: "border-box",
        borderRadius: "5px"
    }

    return (
        <div style={{backgroundColor:"#F2F2F2", display: "inline-flex", padding:"15px",height:"22px",boxShadow: "7px 10px 12px -5px rgba(0,0,0, 0.56)",borderRadius: "5px"}}>
            <input style={INPUTSTYLE} type="text" placeholder="Enter zip code.." value={zipCodeBox} onChange={(e) => setZipCodeBox(e.target.value)}/>
            <button style={{marginLeft:"10px",color:"#01455B",fontFamily:"'Comic Sans MS', cursive, sans-serif",fontSize:"14px"}} onClick={submitHandler}>Send</button>
        </div>
    )
}

export default Form;