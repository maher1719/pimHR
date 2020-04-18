import React, {useState} from "react";
import {useHistory} from "react-router-dom";


const ListeEmploi = () => {
    const user = useState(state => state.auth.user);
    const history = useHistory();
    if (user.role != "recriteur") {
        history.push("/dashboard")
    }


    return (
        <div>

        </div>
    )


};

export default ListeEmploi;