import React from "react";
import { withRouter } from "react-router";
import Item from "./Item";
import Header from "./Header";

import "./List.scss"

const List = ({list, history}) => {
    const nextPath = (e, id) => {
        if(e.target.type === "button") return
        history.push(`/user/${id}`)
    }

    return (
        list.length > 0 
        ? <table className="table">
            <Header />
            <tbody>        
                {
                    list.map((user, index) => 
                    <Item 
                        key={user.id.value} 
                        id={index + 1} 
                        user={user}
                        nextPath={nextPath}
                    />
                    )
                }
            </tbody>
        </table>
        : <h1 style={{textAlign: "center"}}>Empty List</h1>
    )
}

export default withRouter(List)