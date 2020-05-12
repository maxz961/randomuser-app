import { ADD_COUNT } from "../actions/marked"
const count = 20

export default function(state = count , action) {
    switch (action.type) {
        case ADD_COUNT:
            return state += count
        default:
            return state;
    }
}