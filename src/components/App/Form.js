import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }    

    submitTrix = (event) => {
        event.preventDefault();
        const newTrix = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrix(newTrix)
        this.clearForm()
    }

    clearForm = () => {
        this.setState({ stance: '', name: '', obstacle: '', tutorial: '' })
    }

    render() {
        return (
            <form className="form">
                <select name='stance'>
                    <option>Choose Stance</option>
                    <option
                        value={this.state.stance}
                        onChange={event => this.handleChange(event)}
                    >Regular
                    </option>
                    <option
                        value={this.state.stance}
                        onChange={event => this.handleChange(event)}
                    >Switch
                    </option>
                </select>
                <input
                    type='text'
                    placeholder='Trix Name'
                    name='name'
                    value={this.state.name}
                    required={true}
                    onChange={event => this.handleChange(event)}
                />
                <select name='obstacle'>
                    <option>Choose Obstacle</option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Flatground
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Ledge
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Rail
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Stairs
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Pool
                    </option>
                </select>
                <input
                    type='text'
                    placeholder='Tutorial Link'
                    name='tutorial'
                    value={this.state.tutorial}
                    required={true}
                    onChange={event => this.handleChange(event)}
                 />
                 <button onClick={event => this.submitTrix(event)}>Add Your Trix!</button>
            </form>
        )
    }
}

export default Form;