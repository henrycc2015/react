import React from 'react';
import Child from './Child.jsx';
function Hello() {
    return (
        <p1>hello world</p1>
    )
}
class Father extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Child 
                left={
                    <Hello />
                }
                right={
                    <Hello />
                }
            />
        )
    }
}
export default Father;