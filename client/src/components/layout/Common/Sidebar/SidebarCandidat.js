import React from "react";

const SidebarCandidat = () => {
    return (
        <div>
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">
                <li className="nav-item has-treeview">
                    <a href="/dashboard" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"/>
                        <p>
                            Dashboard
                            <i className="right fas fa-angle-left"/>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../../index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"/>
                                <p>Dashboard v2</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon"/>
                                <p>Dashboard v3</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="/profile" className="nav-link">
                        <i className="nav-icon fas fa-th"/>
                        <p>
                            Mon profile
                            <span className="right badge badge-danger">New</span>
                        </p>
                    </a>
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"/>
                        <p>
                            Emploi
                            <i className="right fas fa-angle-left"/>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../../index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon"/>
                                <p>Liste d'emploi</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
};
export default SidebarCandidat;