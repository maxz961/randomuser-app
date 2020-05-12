export const REQUEST_USERS = "REQUEST_USERS"
export const SUCCES_USERS = "SUCCES_USERS"
export const ERROR_USERS = "ERROR_USERS"
export const CHANGE_MARKED = "CHANGE_MARKED"
export const SET_FILTER = "SET_FILTER"

export function requestUsers() {
    return {
        type: REQUEST_USERS
    }
}

export function setUsers(list) {
    return {
        type: SUCCES_USERS,
        list
    }
}

export function serErrorUsers() {
    return {
        type: ERROR_USERS
    }
}

export function changeMarked(userId) {
    return {
        type: CHANGE_MARKED,
        userId
    }
}

export function setFilter(value) {
    return {
        type: SET_FILTER,
        value
    }
}
