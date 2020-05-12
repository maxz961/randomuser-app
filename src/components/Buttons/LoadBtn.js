import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { requestUsers } from "../../redux/actions/users";
import { loadMarked } from "../../redux/actions/marked";

const enhance = connect(
    state => ({filter: state.users.filter}),
    { 
        requestUsers,
        loadMarked
    }
);

const LoadBtn = ({
    requestUsers, 
    loadMarked,
    countUsers, 
    match,
    dashboard,
}) => {
    useEffect(() => {
        dashboard.current.scrollTop = dashboard.current.scrollHeight - 2000
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const action = match.path === "/users"
        ? requestUsers
        : loadMarked
    
    return (
        countUsers || match.path === "/users" 
            ? <button type="button" className="btn btn-success m-auto d-block" onClick={action} >Load Users</button>
            : null
    )
}

export default enhance(withRouter(LoadBtn))