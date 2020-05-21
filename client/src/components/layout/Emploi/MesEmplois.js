import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {myEmploiList, supprimerEmploi} from "../../../api/EmploiApi";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const MesEmplois = () => {
    const user = useSelector(state => state.auth.user);
    //var offres=[];
    let [offres, setOffres] = useState(null);


    useEffect(() => {
        const deleteEmploi = id => {

            confirmAlert({
                title: 'Supprimer',
                message: "Voulez-vous supprimer l'offre d'emploi?",
                buttons: [
                    {
                        label: 'Oui',
                        onClick: () => {
                            supprimerEmploi({"_id": id})

                        }
                    },
                    {
                        label: 'Non',
                        onClick: () => console.log("no")
                    },
                ]
            });
        };

        myEmploiList({
            user: user._id
        }).then((data) => {
            console.log(data)
            let offres1 = data.map(function (obj) {
                let modifier = "/ModifierEmploi" + obj._id;
                let numberIntersted = obj.usersIntersted.length || 0;
                return <tr>
                    <td>{obj._id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.description}</td>
                    <td>{numberIntersted}</td>
                    <td><a href={modifier}>
                        <button className="btn btn-success">modifier</button>
                    </a>
                        <button onClick={e => deleteEmploi(obj._id)} className="btn btn-danger">supprimer</button>
                    </td>
                </tr>
            });
            setOffres(offres1);

        });
    }, []);


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
                                        Mes offres d'emploi
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Projects</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                        data-toggle="tooltip" title="Collapse">
                                    <i className="fas fa-minus"></i></button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                        data-toggle="tooltip" title="Remove">
                                    <i className="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Titre
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Candidat postulé
                                    </th>

                                    <th>
                                        Modifier
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {offres}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </section>
            </div>
        </div>


    )


}
export default MesEmplois;