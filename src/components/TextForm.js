import React,{useState} from "react";
export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let UpperCase = text.toUpperCase();
        setText(UpperCase)
    }
    const handleLowClick=()=>{
        let LowerCase = text.toLowerCase();
        setText(LowerCase)
    }
    const handleClearClick=()=>{
        let clear = ''
        setText(clear)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleCopy=(event)=>{
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges();
    }
    const handleExtraSpaces=()=>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const [text,setText]=useState('');
    const wordCount = text.trim().length === 0 ? 0 :text.trim().split(/\s+/).length;
    return (
        <>
        <div className="container" style={{color : props.mode === "dark" ? "white" : "black"}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value ={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'darkgrey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy to Clipboard</button>
        <button disabled={text.length ===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="containter my-3" style= {{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{.008*wordCount} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
    </div>
    </>
  );
}






