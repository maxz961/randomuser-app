import React from "react"

export default ({url, styles}) => 
    <div className="avatar"  style={styles}>
        <img src={url} className="avatar__img" alt="avatar" />
    </div>