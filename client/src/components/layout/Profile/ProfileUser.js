import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addFavoriteUser, getProfile} from "../../../api/profileApi";

const ProfileUser = () => {
    const user = useSelector(state => state.auth.user);
    let [userProfile, SetUserProfile] = useState({education: [], Stages: [], skills: [], softSkills: []});
    let [education, setEducation] = useState([]);
    let [stages, setStages] = useState([]);

    const id = useParams().id;

    //console.log("profile", userProfile);


    useEffect(() => {
        getProfile({_id: id}).then((data) => {
            SetUserProfile(data);


        })

    }, []);

    //userProfile.skills=["hello"];

    function addFavorite() {
        const data = {_id: user.id, user: id};
        console.log("favoris", data);
        addFavoriteUser(data).then((data) => {
            console.log(data)
        })
    }

    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Profile</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">{userProfile.name || ""}</li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Profile Image */}
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img
                                            className="profile-user-img img-fluid img-circle"
                                            src="../../dist/img/user4-128x128.jpg"
                                            alt="User profile picture"
                                        />
                                    </div>
                                    <h3 className="profile-username text-center">
                                        {userProfile.name || ""}
                                    </h3>
                                    <p className="text-muted text-center">{userProfile.occupation || ""}</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>{userProfile.email || ""}</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Following</b> <a className="float-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Friends</b> <a className="float-right">13,287</a>
                                        </li>
                                    </ul>
                                    <a href="#" onClick={addFavorite} className="btn btn-primary btn-block">
                                        <b>Ajouter a favoris</b>
                                    </a>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                            {/* About Me Box */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">About Me</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    <strong>
                                        <i className="fas fa-book mr-1"/> Education
                                    </strong>
                                    <div className="text-muted">
                                        <ul>
                                            {userProfile.education.map((value, index) => {
                                                return <li>{value.diploma} de <b>{value.institute}</b></li>

                                            })}
                                        </ul>
                                    </div>
                                    <hr/>
                                    <strong>
                                        <i className="fas fa-map-marker-alt mr-1"/> Address
                                    </strong>
                                    <p className="text-muted">{userProfile.address}</p>
                                    <hr/>
                                    <strong>
                                        <i className="fas fa-pencil-alt mr-1"/> Skills
                                    </strong>
                                    <p className="text-muted">
                                        {userProfile.skills.map((value, index) => {
                                            return <span className="badge badge-success">{value}</span>

                                        })}

                                    </p>
                                    <hr/>
                                    <strong>
                                        <i className="fas fa-pencil-alt mr-1"/> Skills
                                    </strong>
                                    <p className="text-muted">
                                        {userProfile.softSkills.map((value, index) => {
                                            return <span className="badge badge-info">{value}</span>

                                        })}

                                    </p>
                                    <hr/>
                                    <strong>
                                        <i className="far fa-file-alt mr-1"/> Notes
                                    </strong>
                                    <p className="text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Etiam fermentum enim neque.
                                    </p>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col */}
                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active"
                                                href="#activity"
                                                data-toggle="tab"
                                            >
                                                Activity
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#timeline"
                                                data-toggle="tab"
                                            >
                                                Timeline
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            {/* Post */}
                                            <div className="post">
                                                <div className="user-block">
                                                    <img
                                                        className="img-circle img-bordered-sm"
                                                        src="../../dist/img/user1-128x128.jpg"
                                                        alt="user image"
                                                    />
                                                    <span className="username">
                              <a href="#">Jonathan Burke Jr.</a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"/>
                              </a>
                            </span>
                                                    <span className="description">
                              Shared publicly - 7:30 PM today
                            </span>
                                                </div>
                                                {/* /.user-block */}
                                                <p>
                                                    Lorem ipsum represents a long-held tradition for
                                                    designers, typographers and the like. Some people
                                                    hate it and argue for its demise, but others ignore
                                                    the hate as they create awesome tools to help create
                                                    filler text for everyone from bacon lovers to
                                                    Charlie Sheen fans.
                                                </p>
                                                <p>
                                                    <a href="#" className="link-black text-sm mr-2">
                                                        <i className="fas fa-share mr-1"/> Share
                                                    </a>
                                                    <a href="#" className="link-black text-sm">
                                                        <i className="far fa-thumbs-up mr-1"/> Like
                                                    </a>
                                                    <span className="float-right">
                              <a href="#" className="link-black text-sm">
                                <i className="far fa-comments mr-1"/> Comments
                                (5)
                              </a>
                            </span>
                                                </p>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="Type a comment"
                                                />
                                            </div>
                                            {/* /.post */}
                                            {/* Post */}
                                            <div className="post clearfix">
                                                <div className="user-block">
                                                    <img
                                                        className="img-circle img-bordered-sm"
                                                        src="../../dist/img/user7-128x128.jpg"
                                                        alt="User Image"
                                                    />
                                                    <span className="username">
                              <a href="#">Sarah Ross</a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"/>
                              </a>
                            </span>
                                                    <span className="description">
                              Sent you a message - 3 days ago
                            </span>
                                                </div>
                                                {/* /.user-block */}
                                                <p>
                                                    Lorem ipsum represents a long-held tradition for
                                                    designers, typographers and the like. Some people
                                                    hate it and argue for its demise, but others ignore
                                                    the hate as they create awesome tools to help create
                                                    filler text for everyone from bacon lovers to
                                                    Charlie Sheen fans.
                                                </p>
                                                <form className="form-horizontal">
                                                    <div className="input-group input-group-sm mb-0">
                                                        <input
                                                            className="form-control form-control-sm"
                                                            placeholder="Response"
                                                        />
                                                        <div className="input-group-append">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-danger"
                                                            >
                                                                Send
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* /.post */}
                                            {/* Post */}
                                            <div className="post">
                                                <div className="user-block">
                                                    <img
                                                        className="img-circle img-bordered-sm"
                                                        src="../../dist/img/user6-128x128.jpg"
                                                        alt="User Image"
                                                    />
                                                    <span className="username">
                              <a href="#">Adam Jones</a>
                              <a href="#" className="float-right btn-tool">
                                <i className="fas fa-times"/>
                              </a>
                            </span>
                                                    <span className="description">
                              Posted 5 photos - 5 days ago
                            </span>
                                                </div>
                                                {/* /.user-block */}
                                                <div className="row mb-3">
                                                    <div className="col-sm-6">
                                                        <img
                                                            className="img-fluid"
                                                            src="../../dist/img/photo1.png"
                                                            alt="Photo"
                                                        />
                                                    </div>
                                                    {/* /.col */}
                                                    <div className="col-sm-6">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <img
                                                                    className="img-fluid mb-3"
                                                                    src="../../dist/img/photo2.png"
                                                                    alt="Photo"
                                                                />
                                                                <img
                                                                    className="img-fluid"
                                                                    src="../../dist/img/photo3.jpg"
                                                                    alt="Photo"
                                                                />
                                                            </div>
                                                            {/* /.col */}
                                                            <div className="col-sm-6">
                                                                <img
                                                                    className="img-fluid mb-3"
                                                                    src="../../dist/img/photo4.jpg"
                                                                    alt="Photo"
                                                                />
                                                                <img
                                                                    className="img-fluid"
                                                                    src="../../dist/img/photo1.png"
                                                                    alt="Photo"
                                                                />
                                                            </div>
                                                            {/* /.col */}
                                                        </div>
                                                        {/* /.row */}
                                                    </div>
                                                    {/* /.col */}
                                                </div>
                                                {/* /.row */}
                                                <p>
                                                    <a href="#" className="link-black text-sm mr-2">
                                                        <i className="fas fa-share mr-1"/> Share
                                                    </a>
                                                    <a href="#" className="link-black text-sm">
                                                        <i className="far fa-thumbs-up mr-1"/> Like
                                                    </a>
                                                    <span className="float-right">
                              <a href="#" className="link-black text-sm">
                                <i className="far fa-comments mr-1"/> Comments
                                (5)
                              </a>
                            </span>
                                                </p>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="Type a comment"
                                                />
                                            </div>
                                            {/* /.post */}
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="timeline">
                                            {/* The timeline */}
                                            <div>
                                                <h2>Eduction</h2>
                                                {/* timeline time label */}
                                                {/* /.timeline-label */}
                                                {/* timeline item */}
                                                {userProfile.education.sort(userProfile.education.yearFinished).map(function (obj) {
                                                    return <div className="timeline timeline-inverse">

                                                        <div className="time-label">
                                                            <span className="bg-danger">{obj.yearFinished}</span>
                                                        </div>

                                                        <div>
                                                            <i className="fas fa-university bg-info"/>
                                                            <div className="timeline-item">

                                                                <h3 className="timeline-header border-0">
                                                                    <a href="#">Dipolome {obj.diploma}</a> De {obj.institute}

                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="time-label">
                                                            <span className="bg-danger">{obj.yearBegan}</span>
                                                        </div>
                                                    </div>
                                                })}
                                                {/* END timeline item */}
                                                {/* timeline item */}

                                                {/* END timeline item */}
                                                {/* timeline item */}
                                                {/* END timeline item */}
                                                {/* timeline time label */}
                                                {/* END timeline item */}
                                                <div>
                                                    <i className="far fa-clock bg-gray"/>
                                                </div>
                                            </div>
                                            <div>
                                                <h2>Stages/Travails</h2>
                                                {/* timeline time label */}
                                                {/* /.timeline-label */}
                                                {/* timeline item */}
                                                {userProfile.Stages.sort(userProfile.Stages.yearFinished).map(function (obj) {
                                                    return <div className="timeline timeline-inverse">

                                                        <div className="time-label">
                                                            <span className="bg-danger">{obj.yearFinished}</span>
                                                        </div>

                                                        <div>
                                                            <i className="fas fa-university bg-info"/>
                                                            <div className="timeline-item">

                                                                <h3 className="timeline-header border-0">
                                                                    Role <b>{obj.title}</b> à {obj.society}

                                                                </h3>
                                                            </div>
                                                        </div>

                                                    </div>
                                                })}
                                                {/* END timeline item */}
                                                {/* timeline item */}

                                                {/* END timeline item */}
                                                {/* timeline item */}
                                                {/* END timeline item */}
                                                {/* timeline time label */}
                                                {/* END timeline item */}
                                                <div>
                                                    <i className="far fa-clock bg-gray"/>
                                                </div>
                                            </div>
                                        </div>

                                        {/* /.tab-pane */}

                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.nav-tabs-custom */}
                        </div>
                        {/* /.col */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </section>
        </div>
    );

};
export default ProfileUser;
