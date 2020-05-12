import React from "react";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import MarkedBtn from "../Buttons/MarkedBtn";
import Avatar from "../Avatar"

const Item = ({user, id, nextPath}) => (
    <tr onClick={e => nextPath(e, user.id.value)} >
        <TableHeader content={id} />
        <TableCell 
            content={<Avatar url={user.picture.large} 
            styles={{maxWidth: 40, maxHeight: 40}} />} 
        />
        <TableCell content={user.name.first} />
        <TableCell content={user.name.last} />
        <TableCell content={user.phone} />
        <TableCell content={<MarkedBtn user={user} />} />
    </tr>
)


export default Item