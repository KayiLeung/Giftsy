import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

// const initialState = {
//   1: {
//     email: "user1@test.com",
//     fname: 'peter',
//     lname: 'chan',
//     password: 'password'
//   },
//   2: {
//     email: "user2@test.com",
//     fname: 'alex',
//     lname: 'edward',
//     password: 'password'
//   },
//   3: {
//     email: "user3@test.com",
//     fname: 'water',
//     lname: 'fall',
//     password: 'password'
//   },
// }


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({} , state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] =  action.currentUser
            return nextState
        default:
            return state;
    }
}

export default usersReducer;

// Sample State Shape
// {
//   1: {
//     email: "user1@test.com",
//     fname: 'peter',
//     lname: 'chan',
//     password: 'password'
//   },
//   2: {
//     email: "user2@test.com",
//     fname: 'alex',
//     lname: 'edward',
//     password: 'password'
//   },
//   3: {
//     email: "user3@test.com",
//     fname: 'water',
//     lname: 'fall',
//     password: 'password'
//   },
// };
