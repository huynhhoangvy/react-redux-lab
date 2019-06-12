import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter } from "../redux/action";

class Counter extends React.Component {

    componentDidMount () {
        setTimeout (() => {
            this.props.dispatch({type : "UPDATE_USER"})
        }, 5000)
    }

    render () {
        console.log("eieuieuieui", this.props)
        return (
            <div>
                <h1>{this.props.count}</h1>
                {/* <button onClick={ () => this.props.increment()}>Increment</button> */}
                {/* <button onClick={ () => this.props.decrement()}>Decrement</button> */}
                <button onClick={ () => this.props.dispatch({type: "INCREMENT_COUNTER"})}>Increment</button>
                <button onClick={ () => this.props.dispatch({type: "DECREMENT_COUNTER"})}>Decrement</button>
            </div>
        )
    }
}

const mapStatesToProps = (state) => {
    return {
        color: "blue",
        age: 22,
        count: state.count,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({type : "INCREMENT_COUNTER"}),
//         decrement: () => dispatch({type : "DECREMENT_COUNTER"})
//     }
// }

export default connect(mapStatesToProps)(Counter)
// export default connect(mapStatesToProps, mapDispatchToProps)(Counter)