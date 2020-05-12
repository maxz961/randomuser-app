import {
    call,
    put,
    select,
    takeLatest
} from "redux-saga/effects";
  
import { fetchUsers } from "../../api"
import {REQUEST_USERS, setUsers, serErrorUsers} from "../actions/users"
  
function* initUsersList(action) {
    try {
        const state = yield select()
        const result = yield call(fetchUsers)
        const newUsers = yield state.users.users.concat(result.data.results)
        yield put(setUsers(newUsers))
    } catch (err) {
        yield put(serErrorUsers())
        console.log(err)
    }

}

export function* watchUsers() {
    yield takeLatest(REQUEST_USERS, initUsersList)
}