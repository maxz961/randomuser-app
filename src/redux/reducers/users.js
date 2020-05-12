import { SUCCES_USERS, CHANGE_MARKED, SET_FILTER, ERROR_USERS, REQUEST_USERS } from "../actions/users"

const initState = {
    users: [],
    filter: "",
    spinner: true
}

export default function(state = initState , action) {
    switch (action.type) {
        case REQUEST_USERS: 
            return {
                ...state,
                filter: "",
                spinner: true
            }
        case SUCCES_USERS: 
            return {
                ...state,
                users: action.list,
                spinner: false
            }
        case ERROR_USERS:
            return {
                ...state,
                spinner: true
            }
        case SET_FILTER:
            return {
                ...state, 
                filter: action.value
            }
        case CHANGE_MARKED: 
            const newUsers = state.users.map(v => 
                v.id.value === action.userId 
                    ? {...v, marked: !v.marked} 
                    : v
            )

            return {
                ...state,
                users: newUsers
            }
        default:
            return state;
    }
}