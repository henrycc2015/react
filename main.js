import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box.jsx';
import Clock from './Clock.jsx';
import Toggle from './Toggle.jsx';
import Page from './Page.jsx';
import NameForm from './NameForm.jsx';
import FruitForm from './FruitForm.jsx';
import Calculator from './Calculator.jsx';
import Father from './Father.jsx';
import Echart from './Echart.jsx';
import {Router, IndexRoute, Route, browserHistory, Link,hashHistory} from 'react-router';

// const routeConfig = [
//   { path: '/',
//     component: Clock,
//     indexRoute: { component: Clock }
//   }
// ]
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render((
//     <Router history={browserHistory }>
//         <Route path='/' component={Clock}>
//             <IndexRoute component={Clock} />
//             <Route path='page' component={Toggle}/>
//         </Route>
//     </Router>
// ),document.getElementById('app'))

// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Redirect, Route, Link, IndexRoute, hashHistory } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/echart">echart</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const Dashboard = React.createClass({
    render(){
        return(
            <div>welcome to the app</div>
        )
    }
})

const About = React.createClass({
  componentDidMount(){
      console.log(this.props);
  },
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})
var config = {
    title: {
        text: '不同城市的月平均气温',
        x: -20
    },
    subtitle: {
        text: '数据来源: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
        title: {
            text: '温度 (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: '东京',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: '纽约',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: '柏林',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: '伦敦',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
}
ReactDOM.render((
  <Echart config={config}/>
), document.getElementById('app'));



//react-redux简单实践

// import React from 'react';
// import PropTypes from 'prop-types';
// import {render} from 'react-dom';
// import {createStore} from 'redux';
// import {Provider, connect} from 'react-redux';

// const Counter = React.createClass({
//   render() {
//     const {value, onIncreaseClick} = this.props;
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//       </div>
//     )
//   }
// })

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// //Reducer

// function counter(state= {count: 0},action) {
//   const count = state.count;
//   switch (action.type) {
//     case 'increase':
//       return {count: count + 1}
//     default :
//      return state;
//   }
// }
// //Action
// const increaseAction = {type: 'increase'};

// //store
// const store = createStore(counter)

// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// //Connect Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// render((
//   <Provider store={store}>
//     <App />
//   </Provider>
//   ),document.getElementById('app')
// )


