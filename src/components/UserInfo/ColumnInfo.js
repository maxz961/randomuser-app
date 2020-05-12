import React from "react";

export default ({leftContetnt, rightContent}) => (
    <div className="d-flex">
        <div className="left mr-2">
            {leftContetnt}
        </div>
        <div className="right">
            {rightContent}
        </div>
    </div>
)