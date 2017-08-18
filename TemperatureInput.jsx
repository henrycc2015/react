import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tem :''
        }
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const tem = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>
                    enter temperature in {scaleNames[scale]}
                </legend>
                <input 
                    value={tem}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }   
}


export default TemperatureInput;