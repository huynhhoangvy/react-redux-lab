// export const counterReducer = (state = { count: 0 }, action) => {
//     switch(action.type) {
//       case 'INCREMENT_COUNTER':
//         return { count: state.count + 1 }
//       default:
//         return state;
//     }
//   }

// export const counterReducer = (state = { count: 0, currentUser: {} }, action) => {
export const counterReducer = (state = { count: 0 }, action) => {
    console.log("action", action)
    if ( action.type === "INCREMENT_COUNTER") {
        return {
            count: state.count + 1
        }
    }

    // if ( action.type === "UPDATE_USER") {
    //     return {
    //         currentUser: "User updated"
    //     }
    // }
    
    if ( action.type === "DECREMENT_COUNTER") {
        return {
            count: state.count - 1
        }
    }
    return state
  }
  