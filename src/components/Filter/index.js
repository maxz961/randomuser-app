import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/users"

const enhance = connect(
    state => ({filter: state.users.filter}),
    dispatch => ({
        handleFilter: e => dispatch(
            setFilter(
                e.target.value
            )
        )
    }),
);

const Filter = ({handleFilter, filter}) => (
    <div className="container pb-3 pt-3">
        <input 
            type="text" 
            value={filter}
            onChange={handleFilter}
            className="form-control"
            placeholder="search username or last name" 
            aria-label="search username or last name"
            aria-describedby="button-addon2" 
        />
    </div>
)

export default enhance(Filter)