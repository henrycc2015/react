import React from 'react';
function Numberlist (props){
    const numbers = props.numbers;
    const list = numbers.map((todo) =>
        <li>{todo*2}</li>
    )
    return (
        <ul>
            {list}
        </ul>
    )
}
function WarnBanner(props) {
    if(!props.warn){
        return null;
    }
    return (
        <div>
            warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWarning :true
        }
        this.handleTog = this.handleTog.bind(this);
        this.numbers = [1,2,3,4,5]
    }
    handleTog(){
        this.setState((prevState)=>({
            showWarning : !prevState.showWarning
        }))
    }


    render(){
        return (
            <div>
                <WarnBanner warn={this.state.showWarning} />
                <button onClick={this.handleTog}>
                    {this.state.showWarning ? 'hide':'show'}
                </button>
                <Numberlist numbers={this.numbers} />
            </div>
        )
    }
}
export default Page