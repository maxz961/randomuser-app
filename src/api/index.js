import axios from "axios"

const URL = "https://randomuser.me/api/?inc=name,nat,picture,phone,id,location,email,gender,dob&results=20&nat=us"

export const fetchUsers = () => 
    axios.get(URL)