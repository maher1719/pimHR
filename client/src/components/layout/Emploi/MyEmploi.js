import React, {useEffect, useState} from "react";
import {myEmploiList, myEmploiListUpdate} from "../../../api/EmploiApi";
import {useSelector} from "react-redux";
import ReactDataGrid from "react-data-grid";
import 'react-data-grid/dist/react-data-grid.css';


const MyEmploi = () => {
    const user = useSelector(state => state.auth.user);
    // const [options, changeOptions]=useState({});
    const columns = [
        {key: "id", name: "ID", editable: false},
        {key: "name", name: "nom", editable: true},
        {key: "society", name: "Societé", editable: true},
        {key: "description", name: "description", editable: true},
        {key: "Supprimer", name: "Supprimer", editable: false}
    ].map(c => ({...c}));
    let rowsA = [
        {id: "0", name: "Task 1", society: "20"},

    ];
    const [rows, setRows] = useState(rowsA);
    useEffect(() => {
        const user_id = user._id;

        async function fetchData() {
            myEmploiList({
                user: user_id
            }).then((data) => {
                console.log(data);
                const newData = [];
                data.forEach((item, index) => {
                    newData[index] = {
                        id: item._id,
                        name: item.name,
                        society: item.society,
                        description: item.description,

                    };
                });
                setRows(newData);
            });
        }

        fetchData();
    }, []);
    const SupprimerAction = [{
        icon: "fa fa-remove",
        callback: () => {
            alert("delete");
        }
    }];

    function getCellActions(column, row) {
        const cellActions = {
            Supprimer: SupprimerAction,
            id: SupprimerAction
        };
        return column.key === "action" ? cellActions : null;
    }

    const onGridRowsUpdated = ({fromRow, toRow, updated}) => {
        console.log("row", toRow);
        setRows((state) => {
            const newRows = state.slice();
            console.log(newRows);
            for (let i = fromRow; i <= toRow; i++) {
                newRows [i] = {...newRows [i], ...updated};
            }

            const dataToSend = {"rows": newRows};
            myEmploiListUpdate(dataToSend).then((data) => {
                console.log(data)
            });
            return newRows;
        });

    };


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

                            <ReactDataGrid
                                columns={columns}
                                rows={rows}
                                onRowsUpdate={onGridRowsUpdated}
                                getCellAction={getCellActions}
                                enableCellSelect={true}
                            />

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

};
export default MyEmploi;