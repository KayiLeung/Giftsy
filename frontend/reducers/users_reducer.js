import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({} , state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] =  action.currentUser;
            return nextState;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_ALL_USERS:
            return action.users;
        default:
            return state;
    }
}

export default usersReducer;

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


