// import React from 'react';
// import ReactDOM from 'react-dom';
// import Box from './Box.jsx';
// import Clock from './Clock.jsx';
// import Toggle from './Toggle.jsx';
// import Page from './Page.jsx';
// import NameForm from './NameForm.jsx';
// import FruitForm from './FruitForm.jsx';
// import Calculator from './Calculator.jsx';
// import Father from './Father.jsx';
// import {Router, IndexRoute, Route, browserHistory, Link} from 'react-router';

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

// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// const Dashboard = React.createClass({
//     render(){
//         return(
//             <div>welcome to the app</div>
//         )
//     }
// })

// const About = React.createClass({
//   componentDidMount(){
//       console.log(this.props);
//   },
//   render() {
//     return <h3>About</h3>
//   }
// })

// const Inbox = React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || "Welcome to your Inbox"}
//       </div>
//     )
//   }
// })

// const Message = React.createClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })

// render((
//   <Router history={hashHistory} >
//     <Route path="/" component={App}>
//       <IndexRoute component={Dashboard} />
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="/messages/:id" component={Message} />
//         <Redirect from='messages/:id' to='/messages/:id' />
//       </Route>
//     </Route>
//   </Router>
// ), document.getElementById('app'));



//react-redux简单实践

import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

const Counter = React.createClass({
  render() {
    const {value, onIncreaseClick} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
})

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

//Reducer

function counter(state= {count: 0},action) {
  const count = state.count;
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default :
     return state;
  }
}
//Action
const increaseAction = {type: 'increase'};

//store
const store = createStore(counter)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

//Connect Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

render((
  <Provider store={store}>
    <App />
  </Provider>
  ),document.getElementById('app')
)


