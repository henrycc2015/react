import React from 'react';

function formatName (user){
    return user.firstName + user.lastName;
}
const user = {
    firstName: 'harper',
    lastName: 'perezs'
}

function Welcome (props){
    return <h1>Hello, {props.name}</h1>;
}
function Hello (props){
    return (
        <div>
            <Welcome name='hery' />
            <h2>{props.user}</h2>
            <Welcome name='bianmu' />
            <Welcome name='shirley' />
        </div>
    )
}

function World (){
    return (
        <Hello user={user.firstName} />
    )
}
//es6的方式定义组件
class App extends React.Component{
    render(){
        return(
            World()
        )
    }
}

export default App;