import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {addEmploiTofavorite, getAllEmplois} from "../../../api/EmploiApi";


const ListeEmploi = () => {
    const user = useSelector(state => state.auth.user);
    console.log("***************************",user);
    const [emplois,getEmplois]= useState(null)

    useEffect(()=>{
        function postule(id_emploi){
            addEmploiTofavorite({"id": id_emploi, "user": user.id});

        }
        getAllEmplois().then((data)=>{
            console.log("emplois",data)
            let emploiList= data.map(function(obj){
                const tags=obj.tags.map(function(obj){
                    return obj+", ";
                })
                return <div className="col-md-4"> <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{obj.name}</h3>
                        <div className="card-tools">
                            <span className="badge badge-primary">{tags}</span>
                        </div>

                    </div>

                    <div className="card-body">
                        <div>{obj.description}</div>
                        <div><i className="fa fa-home"/> {obj.address} </div>
                    </div>

                    <div className="card-footer">
                        <div className="btn btn-success">Voir détail</div><div onClick={(e) => postule(obj._id)} className="btn btn-primary">postuler</div>
                    </div>

                </div>
                </div>

            });
            getEmplois(emploiList);
        })
    },[user])

    return (
        <div>
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
                        <div className="row">
                            {emplois}
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
export default ListeEmploi;