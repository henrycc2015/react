import React from 'react';
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    //componentDidMount() 钩子在组件输出被渲染到 DOM 之后运行
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnMount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <h1>hello, world</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;