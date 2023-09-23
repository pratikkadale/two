import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function About() {


    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [btnContain, setbtnContain]= useState('Enable Dark Mode')

    const toggleBtn = ()=>{

        if(mystyle.color==='black')
        {
            setMystyle({color:'white',
            backgroundColor:'black'})
            
            setbtnContain('Enable Light Mode')
        
        }
        else
        {
            setMystyle({color: 'black',
            backgroundColor:'white'})

            setbtnContain('Enable Dark Mode')

        }
    }

    return (
    <div className='container my-3' >
            <h2 className='my-3'> About Us </h2>        
            <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header >Accordion Item #1</Accordion.Header>
                <Accordion.Body >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                
                <h2 className='accordion-header' id='heading two'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                    Accordion Item #1    
                </button>                
                </h2>
                <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                
                {/* <Accordion.Header style={mystyle}>
                    <button className="accordion-button-collapsed" style={mystyle} type="button" data-bs-toggle="collapse">
                    Accordion Item #2</button>
                </Accordion.Header> */}
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
                </div>
            </Accordion.Item>
            </Accordion>
            <button className="btn-primary my-2" onClick={toggleBtn}>{btnContain}</button>
    </div>      
        
  )
}
