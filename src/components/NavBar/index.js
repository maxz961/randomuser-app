import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import "./NavBar.scss"

const pages = ["users", "marked users"];

const renderLink = (page, i = -1) => 
        <NavLink
            key={i}
            className={"link"}
            activeClassName={"active-link"}
            to={`/${page}`.split(" ").join("-")}
        >
            {page}
        </NavLink>

const rederBackLink = history =>
    <div
        key="back"
        className={"link"}
        onClick={() => history.goBack()}
    >
        Back
    </div>

const NavBar = ({isBack = false, history}) => {
    return(
        <div className={"nav-bar"}>
            { !isBack 
                ? pages.map(renderLink)
                : rederBackLink(history)

            }
        </div>
    )
} 

export default withRouter(NavBar)