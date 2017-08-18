import React from 'react';
class Box extends React.Component{
    constructor(props){
        super(props);
        this.unreadMessages = props.unreadMessages;
    }

    Child() {
        return(
            this.unreadMessages.length < 0 ? 
                (<h2>
                    you have {this.unreadMessages.length} unread messages
                </h2>):(<h1>hello</h1>)
            
        )
    }

    render() {
        return this.Child();
    }
}

export default Box;