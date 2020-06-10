import React, {useEffect, useState} from "react";
import {acceptUserEmploi, ListIntersted} from "../../../api/EmploiApi";
import {useParams} from "react-router-dom";

const EmploiPostule = () => {
    const id = useParams().id;
    let [candidat, setCandidat] = useState(null)
    let [name, setName] = useState(null)

    useEffect(() => {
        function acceptCandidat(id_user) {
            acceptUserEmploi({"_id": id, "user": id_user}).then((data) => {
                console.log("accept", data);
            })

        }

        function refuseCandidat(id_user) {

        }

        ListIntersted({"_id": id}).then((data) => {
            setName(data.name)
            console.log(data);
            const candidats = data.intersed.map(function (candidat) {
                let profile = "";
                if (candidat !== null) {
                    profile = "/profile" + candidat._id;

                }

                if (candidat !== null)
                    return <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                        <div className="card bg-light">
                            <div className="card-header text-muted border-bottom-0">
                                {candidat.occupation}
                            </div>
                            <div className="card-body pt-0">
                                <div className="row">
                                    <div className="col-7">
                                        <h2 className="lead"><b>{candidat.name}</b></h2>
                                        <p className="text-muted text-sm"><b>About: </b> Web
                                            Designer / UX /
                                            Graphic Artist / Coffee Lover </p>
                                        <ul className="ml-4 mb-0 fa-ul text-muted">
                                            <li className="small"><span className="fa-li"><i
                                                className="fas fa-lg fa-building"/></span> Address:
                                                {candidat.address}
                                            </li>
                                            <li className="small"><span className="fa-li"><i
                                                className="fas fa-lg fa-phone"/></span> Phone #:
                                                {candidat.phone}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-5 text-center">
                                        <img src="../../dist/img/user1-128x128.jpg" alt=""
                                             className="img-circle img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="text-right">
                                    <a href="#" onClick={(e) => acceptCandidat(candidat._id)}
                                       className="btn btn-sm bg-teal">
                                        <i className="fas fa-check"/>Accepter
                                    </a>
                                    <a href="#" onClick={(e) => refuseCandidat(candidat._id)}
                                       className="btn btn-sm bg-danger">
                                        <i className="fas fa-remove"/>refuser
                                    </a>
                                    <a href={profile} className="btn btn-sm btn-primary">
                                        <i className="fas fa-user"/> Voire Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            })
            setCandidat(candidats);
        })
    }, [])

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>{name}</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        utilisateurs postulé
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Title</h3>
                            <div className="card-tools">
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                    data-toggle="tooltip"
                                    title="Collapse"
                                >
                                    <i className="fas fa-minus"/>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="remove"
                                    data-toggle="tooltip"
                                    title="Remove"
                                >
                                    <i className="fas fa-times"/>
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card card-solid">
                                <div className="card-body pb-0">
                                    <div className="row d-flex align-items-stretch">
                                        {candidat}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">Footer</div>
                        {/* /.card-footer*/}
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}
export default EmploiPostule;