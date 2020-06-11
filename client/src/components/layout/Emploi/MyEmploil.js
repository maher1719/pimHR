import React from "react";
import {useSelector} from "react-redux";
import {myEmploiList} from "../../../api/EmploiApi";

const MyEmploil = () => {
    const user = useSelector(state => state.auth.user);
    let offres = null;
    myEmploiList({
        user: user.id
    }).then((data) => {
        offres = data;
    });
    console.log(offres);

    return (
        <div></div>
    )


}
export default MyEmploil;