import React, { Component } from 'react';
import './../styles/Index.css'

class Form extends Component {

    constructor(props) {
        super(props)
        
            this.state = {
                text: ''
        }
    }

    handleTextChange = event => {
        this.setState(
            {
                text: event.target.value
            }
        )
    }

    handleSubmit = event => {
        alert(`${this.state.text}`)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handleTextChange}
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
}

export default Form;
