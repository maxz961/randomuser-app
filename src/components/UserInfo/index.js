import React from "react";
import { Redirect } from 'react-router';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import UserContaine from "./UserContaine"
import "./UserInfo.scss"

const enhance = connect(
    state => ({users: state.users.users}),
);

const UserInfo = ({match, users}) => {
    const findUser = users.find(v => v.id.value === match.params.id)

    return (
        <div className="info container d-flex flex-column align-items-center pt-5">
            {findUser 
                ? <UserContaine user={findUser} />
                : <Redirect to="/users" />
            }    
                
                
        </div>
    )
}

export default enhance(withRouter(UserInfo))