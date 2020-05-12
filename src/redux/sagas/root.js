import { all, fork } from "redux-saga/effects";
import { watchUsers } from "./users";

export default function* rootSaga() {
    yield all([
        fork(watchUsers),
    ])
}