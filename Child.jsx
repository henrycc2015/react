import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {this.props.left}
                {this.props.right}
            </div>
        )
    }
}
export default Child;