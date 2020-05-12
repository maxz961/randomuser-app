import React from "react";
import { connect } from "react-redux";
import { changeMarked } from "../../redux/actions/users";

const enhance = connect(
    null,
    { 
        changeMarked,
    }
);

const isMarked = (isMarked, first, second) => 
    isMarked ? first : second


const MarkedBtn = ({changeMarked, user}) => (
    <button 
        type="button" 
        style={{width: 38,  height: 38}}
        className={`btn font-weight-bold btn-${isMarked(user.marked, "success", "secondary")}`} 
        onClick={() => changeMarked(user.id.value)} 
    >
        {isMarked(user.marked, "-", "+")}
    </button>
)

export default enhance(MarkedBtn)