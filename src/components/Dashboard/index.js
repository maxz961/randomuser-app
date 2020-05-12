import React, {useEffect, useRef} from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { requestUsers } from "../../redux/actions/users";
import List from "../List";
import LoadBtn from "../Buttons/LoadBtn";
import Filter from "../Filter";
import Spinner from "../Spinner";

const enhance = connect(
    state => ({
        users: state.users.users,
        filter: state.users.filter,
        count: state.marked,
        spinner: state.users.spinner
    }),
    { 
        requestUsers,
    }
);

const validProperty = (value, filter) =>
    value.toLowerCase().includes(filter.trim().toLowerCase())

const filterUsers = (users, filter) =>
    users.filter(v => validProperty(v.name.first, filter) || validProperty(v.name.last, filter))

const Dashboard = ({
    users, 
    count, 
    requestUsers, 
    filter, 
    match,
    spinner
}) => {
    const dashboard = useRef(null);

    const list = match.path === "/users" 
        ? filterUsers(users, filter)
        : filterUsers(users, filter)
            .filter(user => user.marked)
            .slice(0, count)

    const countUsersMarked = filterUsers(users, filter)
        .filter(user => user.marked)
        .length > 20

    useEffect(() => {
        !users.length && requestUsers()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        !spinner 
            ? <>
                <Filter />
                <div ref={dashboard} className="container overflow-auto pb-3">
                    
                    <List list={list} />
                    <LoadBtn countUsers={countUsersMarked} dashboard={dashboard} />
                </div>
            </>
            : <Spinner />
    )
}

export default enhance(withRouter(Dashboard))