import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function Textfile(props) {
  
    const handelOnChange = (event)=>{
               console.log("OnChange") 
                setText(event.target.value)
            }

    const handelUpClick = ()=>{
        
            setText(text.toLowerCase());
        
    }   
    const handelLowClick = ()=>{
        
        setText(text.toUpperCase());
    
    }        

    const handelCleartext =()=>{

        setText('');
    }

    const handelspaces =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('Text Here!');
  
    return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <Form>
            <h1>{props.heading}</h1>
            <Form.Group className="mb-3" controlId="myBox">
                <Form.Control as="textarea" value = {text} style={{backgroundColor:props.mode==='dark'?'#343a40':'white',color:props.mode==='light'?'black':'white'}} onChange={handelOnChange} rows={3} />
            </Form.Group>
            </Form>
            <button className="btn btn-primary" onClick={handelUpClick}>Convert to Lower Case </button>
            <button className="btn btn-primary mx-3" onClick={handelLowClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handelCleartext}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handelspaces}>Remove extra spaces</button>

        </div>
    
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <p> Text contains {text.split(" ").length} words and {text.length} characters</p>
            <p> Average time to read this {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Type something to preview it here"}</p>
        </div>
    </>
  )
}
