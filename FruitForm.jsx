import React from 'react';

class FruitForm extends React.Component{
    constructor (props){
        super(props);
        this.state = {value:'apple'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    name:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='apple'>apple</option>
                        <option value='orange'>orange</option>
                        <option value='pear'>pear</option>
                    </select>
                </label>
                <input type="submit" value='submit' />
            </form>
        )
    }

} 

export default FruitForm