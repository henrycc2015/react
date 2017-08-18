import React from 'react';
import TemperatureInput from './TemperatureInput.jsx';
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p> The water would boil</p>
    }
    return <p>The water would not boil</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
    
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleC = this.handleC.bind(this);
        this.handleF = this.handleF.bind(this);
        this.state = {
            tem: '',
            scale: 'c'
        }
    }
    handleC(tem){
        this.setState({
            scale:'c',
            tem
        })
    }
    handleF(tem){
        this.setState({
            scale:'f',
            tem
        })
    }
    render() {
        const tem = this.state.tem;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(tem,toCelsius) :tem;
        const fahrenheit = scale === 'c' ? tryConvert(tem,toFahrenheit) :tem;
        return (
            <fieldset>
                <TemperatureInput 
                    scale='c' 
                    temperature={celsius}
                    onTemperatureChange={this.handleC}
                />
                <TemperatureInput 
                    scale='f' 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleF}
                />
                <BoilingVerdict 
                    celsius={parseFloat(tem)} 
                />
            </fieldset>
        )
    }
}
export default Calculator;