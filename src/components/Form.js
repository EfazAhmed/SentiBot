import React, { Component } from 'react';

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
                        <label>Username</label>
                        <textarea
                            type='text' 
                            value={this.state.username} 
                            onChange={this.handleTextChange}
                            charswidth="5"
                        />
                    </div> 
                </form>
            </div>
        )
    }
}

export default Form;
