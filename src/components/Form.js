import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/Index.css'

const Form = () => {
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const handleSubmit = () => {
        if(text == '') {
            alert("There is no text to analyze.")
        }
        else {
            // alert(`${text}`)
            navigate('report', 
                { state: text , replace: true})
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        type='text' 
                        value={text} 
                        onChange={event => setText(event.target.value)}
                        rows={2}
                        cols={window.innerWidth/40}            
                    />
                    <br></br>
                    <button type="submit">Analyze</button>
                </div> 
            </form>
        </div>
    )
    
}

export default Form