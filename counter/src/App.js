
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;











// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'


// // * MUST uncomment and include below on codepen 
// // const {createStore } = Redux;
// // const { connect, Provider } = ReactRedux;

// // React component
// class Counter extends React.Component {
//   render() {
//     const { value, onIncreaseClick } = this.props
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//       </div>
//     )
//   }
// }

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// // Action
// const increaseAction = { type: 'increase' }

// // Reducer
// function counter(state = { count: 0 }, action) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }

// // Store
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

// // Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// )