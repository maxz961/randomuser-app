import React from "react"
import Avatar from "../Avatar"
import Info from "./Info"

export default ({user}) => (
    <>
        <Avatar url={user.picture.large} styles={{minWidth: "30vh", minHeight: "30vh"}} />
        <Info user={user} />
    </>
)