import React from "react";
import ColumnInfo from "./ColumnInfo";

const getAddres = user => {
    const { country, state, city, street } = user.location
    return `${country}, ${state}, ${city}, ${street.name} ${street.number}`
}

const getBod = user => {
    const dt = new Date(user.dob.date)
    return `${dt.getFullYear()} ${("0" + dt.getMonth()).slice(-2)} ${dt.getDate()}`
}

export default ({user}) => (
    <div className="pt-3 h-100 d-flex flex-column justify-content-center">
        <ColumnInfo leftContetnt={"Addres:"} rightContent={getAddres(user)} />
        <ColumnInfo leftContetnt={"Email:"} rightContent={user.email} />
        <ColumnInfo leftContetnt={"Gender:"} rightContent={user.gender} />
        <ColumnInfo leftContetnt={"Date of Birth:"} rightContent={getBod(user)} />
        <ColumnInfo leftContetnt={"Phone:"} rightContent={user.phone} />
    </div>
)

    