import React, { Component } from 'react';
import './../styles/Index.css'

class Form extends Component {

    constructor(props) {
        super(props)
        
            this.state = {
                text: ''
        }
    }

    handleTextChange = (event) => {
        this.setState(
            {
                text: event.target.value
            }
        )
    }
    
    render() {
        return (
            <div>
                <form>
                    <div>
                        <textarea
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handleTextChange}
                            rows={2}
                            cols={35}            
                        />
                    </div> 
                </form>
            </div>
        )
    }
}

export default Form;
