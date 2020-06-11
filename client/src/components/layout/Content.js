import React, {useEffect, useState} from "react";
import BigCalendar from "./Calendar/BigCalendar";
import HeaderFeature from "./Common/Header/HeaderFeature";
import Sidebar from "./Common/Sidebar/SideBar";
import {shortListIntersted} from "../../api/EmploiApi";
import {useSelector} from "react-redux";


const Content = () => {
    const user = useSelector(state => state.auth.user);
    let [shortList, SetShortList] = useState(null)

    useEffect(() => {
        console.log("user",user.id)
        if (user.role !== "candidat" && user.id)
            shortListIntersted({"user": user.id}).then((data) => {
                console.log("usersIntersted", data);
                const colors = ["success", "info", "warning", "danger"];
                let i = 0;
                const short = data.map(function (emploi) {
                    const color = colors[i % 4];
                    const className = "small-box bg-" + color;
                    i++;
                    const emploiPostule = "/EmploiPostule" + emploi._id
                    if (emploi.number > 0)
                        return <div className="col-lg-3 col-6">

                            <div className={className}>
                                <div className="inner">
                                    <h4>{emploi.title}</h4>

                                    <p>Nomber postulé : <b>{emploi.number}</b></p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"/>
                                </div>
                                <a href={emploiPostule} className="small-box-footer">plus d'info <i
                                    className="fas fa-arrow-circle-right"/></a>
                            </div>
                        </div>
                })
                SetShortList(short);
            })
    }, [user])


    return (
        <div>
            <HeaderFeature/>
            <Sidebar/>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Blank Page</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Blank Page
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
                    <div className="row">

                        {shortList}


                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Ma calendrier</h3>
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

                            <BigCalendar/>
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
    );
};

export default Content;