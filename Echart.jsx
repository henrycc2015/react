import React from 'react';
const ReactHighcharts = require('react-highcharts');

var Echart = React.createClass({
    componentDidMount:function(){
        console.log(this.props);
    },
    render(){
        return (
            <ReactHighcharts config={this.props.config}/>
        )
    }
})
export default Echart;