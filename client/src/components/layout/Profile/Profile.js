import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Field, FieldArray, Formik} from "formik";
import store from '../../../store';
import * as Yup from "yup";
import TagsInput from "react-tagsinput";
import {DisplayFormikState} from "../helperFormik";

import {setCurrentUser, storeKey} from "../../../features/auth/authSlice";
import {updateUser} from "../../../api/profileApi";

const Profile = () => {
    const user = useSelector(state => state.auth.user);
    const userLocal = localStorage[storeKey] ? JSON.parse(localStorage[storeKey]) : undefined
    const userProfile = userLocal ? userLocal.user : user
    const Activity = userProfile.education.concat(userProfile.Stages)
    console.log(Activity);
    console.log("profile", userProfile);


    useEffect(() => {


    }, [userProfile]);
    //userProfile.skills=["hello"];

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
                            <li className="breadcrumb-item active">{userProfile.name}</li>
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
                                        {userProfile.name}
                                    </h3>
                                    <p className="text-muted text-center">{userProfile.occupation}</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>{userProfile.email}</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Following</b> <a className="float-right">543</a>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Friends</b> <a className="float-right">13,287</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary btn-block">
                                        <b>Follow</b>
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
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="#settings"
                                                data-toggle="tab"
                                            >
                                                Parametre
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
                                            <div className="timeline timeline-inverse">
                                                {/* timeline time label */}
                                                <div className="time-label">
                                                    <span className="bg-danger">10 Feb. 2014</span>
                                                </div>
                                                {/* /.timeline-label */}
                                                {/* timeline item */}
                                                <div>
                                                    <i className="fas fa-envelope bg-primary"/>
                                                    <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"/> 12:05
                              </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Support Team</a> sent you an email
                                                        </h3>
                                                        <div className="timeline-body">
                                                            Etsy doostang zoodles disqus groupon greplin
                                                            oooj voxy zoodles, weebly ning heekya handango
                                                            imeem plugg dopplr jibjab, movity jajah plickers
                                                            sifteo edmodo ifttt zimbra. Babblely odeo
                                                            kaboodle quora plaxo ideeli hulu weebly
                                                            balihoo...
                                                        </div>
                                                        <div className="timeline-footer">
                                                            <a href="#" className="btn btn-primary btn-sm">
                                                                Read more
                                                            </a>
                                                            <a href="#" className="btn btn-danger btn-sm">
                                                                Delete
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END timeline item */}
                                                {/* timeline item */}
                                                <div>
                                                    <i className="fas fa-user bg-info"/>
                                                    <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"/> 5 mins ago
                              </span>
                                                        <h3 className="timeline-header border-0">
                                                            <a href="#">Sarah Young</a> accepted your friend
                                                            request
                                                        </h3>
                                                    </div>
                                                </div>
                                                {/* END timeline item */}
                                                {/* timeline item */}
                                                <div>
                                                    <i className="fas fa-comments bg-warning"/>
                                                    <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"/> 27 mins ago
                              </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Jay White</a> commented on your post
                                                        </h3>
                                                        <div className="timeline-body">
                                                            Take me to your leader! Switzerland is small and
                                                            neutral! We are more like Germany, ambitious and
                                                            misunderstood!
                                                        </div>
                                                        <div className="timeline-footer">
                                                            <a
                                                                href="#"
                                                                className="btn btn-warning btn-flat btn-sm"
                                                            >
                                                                View comment
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END timeline item */}
                                                {/* timeline time label */}
                                                <div className="time-label">
                                                    <span className="bg-success">3 Jan. 2014</span>
                                                </div>
                                                {/* /.timeline-label */}
                                                {/* timeline item */}
                                                <div>
                                                    <i className="fas fa-camera bg-purple"/>
                                                    <div className="timeline-item">
                              <span className="time">
                                <i className="far fa-clock"/> 2 days ago
                              </span>
                                                        <h3 className="timeline-header">
                                                            <a href="#">Mina Lee</a> uploaded new photos
                                                        </h3>
                                                        <div className="timeline-body">
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                            />
                                                            <img
                                                                src="http://placehold.it/150x100"
                                                                alt="..."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* END timeline item */}
                                                <div>
                                                    <i className="far fa-clock bg-gray"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="settings">

                                            <Formik
                                                enableReinitialize={true}
                                                initialValues={{
                                                    education: userProfile.education || [{
                                                        institute: "",
                                                        yearBegan: "",
                                                        yearFinished: "",
                                                        diploma: ""
                                                    }],
                                                    name: userProfile.name,
                                                    phone: userProfile.phone,
                                                    occupation: userProfile.occupation,
                                                    address: userProfile.address,
                                                    skills: userProfile.skills || [],
                                                    softSkills: userProfile.softSkills || [],

                                                }}
                                                onSubmit={async values => {
                                                    values.email = userProfile.email;
                                                    await new Promise(resolve => setTimeout(resolve, 500));
                                                    //alert(JSON.stringify(values, null, 2));

                                                    await updateUser(values).then((data) => {

                                                        store.dispatch(setCurrentUser(data));

                                                        //console.log("perssiste",store.getState())
                                                        function persist() {

                                                            let json = JSON.stringify(store.getState());
                                                            let json2 = JSON.parse(json);
                                                            let json3 = json2.auth;
                                                            localStorage.setItem(storeKey, JSON.stringify(json3));

                                                            console.log("loccal profile", localStorage[storeKey]);
                                                        }


                                                        store.subscribe(persist);
                                                        console.log("localstorage", localStorage[storeKey]);


                                                    });
                                                    //alert(JSON.stringify(values, null, 2));
                                                    console.log()
                                                }}
                                                validationSchema={Yup.object().shape({
                                                    name: Yup.string()
                                                        .required("Le titre d'emploi est obligatoire"),
                                                    phone: Yup.number()
                                                        //TODO badelha
                                                        .required("votre numéro de téléphone"),
                                                    occupation: Yup.string()
                                                        //TODO badelha
                                                        .required("votre occupation"),
                                                    address: Yup.string()
                                                        //TODO badelha
                                                        .required("votre address"),


                                                })}
                                            >
                                                {props => {
                                                    const {
                                                        values,
                                                        touched,
                                                        errors,
                                                        dirty,
                                                        isSubmitting,
                                                        handleChange,
                                                        handleBlur,
                                                        handleSubmit,
                                                        handleReset,

                                                        setFieldValue
                                                    } = props;
                                                    return (

                                                        <form className="form" onSubmit={handleSubmit}>

                                                            <div className="form-group">
                                                                <label htmlFor="name">titre</label>
                                                                <input
                                                                    id="name"
                                                                    placeholder="Enter your email"
                                                                    type="text"
                                                                    value={values.name}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}

                                                                    className={
                                                                        errors.name && touched.name
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                />
                                                                {errors.name && touched.name && (
                                                                    <div className="input-feedback">{errors.name}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="occupation">ocuupation actuelle</label>
                                                                <input
                                                                    id="occupation"
                                                                    placeholder="Enter your email"
                                                                    type="text"
                                                                    value={values.occupation}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}

                                                                    className={
                                                                        errors.occupation && touched.occupation
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                />
                                                                {errors.occupation && touched.occupation && (
                                                                    <div
                                                                        className="input-feedback">{errors.occupation}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="phone">numéro de téléphone</label>
                                                                <input
                                                                    id="phone"
                                                                    placeholder="Enter your email"
                                                                    type="number"
                                                                    value={values.phone}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    className="form-control"
                                                                    className={
                                                                        errors.phone && touched.phone
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                />
                                                                {errors.phone && touched.phone && (
                                                                    <div className="input-feedback">{errors.phone}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="address">address</label>
                                                                <input
                                                                    id="address"
                                                                    placeholder="Enter your email"
                                                                    type="text"
                                                                    value={values.address}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    className={
                                                                        errors.address && touched.address
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                />
                                                                {errors.address && touched.address && (
                                                                    <div
                                                                        className="input-feedback">{errors.address}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="skills">tags <span>(les mot clé de votre emploi ex tunis,javascript...)</span></label>
                                                                <TagsInput
                                                                    name="skills"
                                                                    value={values.skills}
                                                                    className={
                                                                        errors.skills && touched.skills
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                    onChange={skills => {
                                                                        console.log(skills);
                                                                        setFieldValue("skills", skills);
                                                                    }}
                                                                />
                                                                {errors.skills && touched.skills && (
                                                                    <div
                                                                        className="input-feedback">{errors.skills}</div>
                                                                )}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="softSkills">soft skills <span>(les mot clé de votre emploi ex tunis,javascript...)</span></label>
                                                                <TagsInput
                                                                    name="softSkills"
                                                                    value={values.softSkills}
                                                                    className={
                                                                        errors.softSkills && touched.softSkills
                                                                            ? "text-input form-control error"
                                                                            : "text-input form-control"
                                                                    }
                                                                    onChange={softSkills => {
                                                                        //console.log(softSkills);
                                                                        setFieldValue("softSkills", softSkills);
                                                                    }}
                                                                />
                                                                {errors.softSkills && touched.softSkills && (
                                                                    <div
                                                                        className="input-feedback">{errors.softSkills}</div>
                                                                )}
                                                            </div>
                                                            <FieldArray
                                                                name="education"
                                                                render={arrayHelpers => (
                                                                    <div>
                                                                        {values.education && values.education.length > 0 ? (
                                                                            values.education.map((friend, index) => (
                                                                                <div key={index}>
                                                                                    <label>Institue</label>
                                                                                    <Field className="form-control"
                                                                                           name={`education.${index}.institute`}/>
                                                                                    <br/>
                                                                                    <label>Diplome </label>
                                                                                    <Field className="form-control"
                                                                                           name={`education.${index}.diploma`}/>
                                                                                    <br/>
                                                                                    <label>Date de debut</label>
                                                                                    <Field className="form-control"
                                                                                           type="date"
                                                                                           name={`education.${index}.yearBegan`}/>
                                                                                    <br/>
                                                                                    <label>Date de fin</label>
                                                                                    <Field className="form-control"
                                                                                           type="date"
                                                                                           name={`education.${index}.yearFinished`}/>
                                                                                    <hr/>

                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-danger"
                                                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                                    >
                                                                                        -
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-info"
                                                                                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                                                                    >
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                            ))
                                                                        ) : (
                                                                            <button type="button"
                                                                                    className="btn btn-success"
                                                                                    onClick={() => arrayHelpers.push("")}>
                                                                                {/* show this when user has removed all friends from the list */}
                                                                                Ajouter une Education
                                                                            </button>
                                                                        )}

                                                                    </div>
                                                                )}
                                                            />
                                                            <FieldArray
                                                                name="Stages"
                                                                render={arrayHelpers => (
                                                                    <div>
                                                                        {values.Stages && values.Stages.length > 0 ? (
                                                                            values.Stages.map((friend, index) => (
                                                                                <div key={index}>
                                                                                    <label>Role</label>
                                                                                    <Field className="form-control"
                                                                                           name={`Stages.${index}.title`}/>
                                                                                    <br/>
                                                                                    <label>Diplome </label>
                                                                                    <Field className="form-control"
                                                                                           type="TextArea"
                                                                                           name={`Stages.${index}.society`}/>
                                                                                    <br/>
                                                                                    <label>Date de debut</label>
                                                                                    <Field className="form-control"
                                                                                           type="date"
                                                                                           name={`Stages.${index}.DateBegin`}/>
                                                                                    <br/>
                                                                                    <label>Date de fin</label>
                                                                                    <Field className="form-control"
                                                                                           type="date"
                                                                                           name={`Stages.${index}.DateFinished`}/>
                                                                                    <hr/>

                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-danger"
                                                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                                    >
                                                                                        -
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-info"
                                                                                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                                                                    >
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                            ))
                                                                        ) : (
                                                                            <button type="button"
                                                                                    className="btn btn-success"
                                                                                    onClick={() => arrayHelpers.push("")}>
                                                                                {/* show this when user has removed all friends from the list */}
                                                                                Ajouter une Experience
                                                                            </button>
                                                                        )}


                                                                    </div>
                                                                )}
                                                            />

                                                            <FieldArray
                                                                name="Projects"
                                                                render={arrayHelpers => (
                                                                    <div>
                                                                        {values.Projects && values.Projects.length > 0 ? (
                                                                            values.Projects.map((friend, index) => (
                                                                                <div key={index}>
                                                                                    <label>titre de projet</label>
                                                                                    <Field className="form-control"
                                                                                           name={`Projects.${index}.title`}/>
                                                                                    <br/>
                                                                                    <label>Description </label>
                                                                                    <Field className="form-control"
                                                                                           type="TextArea"
                                                                                           name={`Projects.${index}.description`}/>
                                                                                    <br/>
                                                                                    <label>URL (optionel)</label>
                                                                                    <Field className="form-control"
                                                                                           type="date"
                                                                                           name={`Projects.${index}.url`}/>
                                                                                    <br/>


                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-danger"
                                                                                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                                                    >
                                                                                        -
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn btn-outline-info"
                                                                                        onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                                                                    >
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                            ))
                                                                        ) : (
                                                                            <button type="button"
                                                                                    className="btn btn-success"
                                                                                    onClick={() => arrayHelpers.push("")}>
                                                                                {/* show this when user has removed all friends from the list */}
                                                                                Ajouter une Experience
                                                                            </button>
                                                                        )}

                                                                    </div>
                                                                )}
                                                            />


                                                            <button
                                                                type="button"
                                                                className="outline"
                                                                onClick={handleReset}
                                                                disabled={!dirty || isSubmitting}
                                                            >
                                                                Reset
                                                            </button>
                                                            <button type="submit" disabled={isSubmitting}>
                                                                Submit
                                                            </button>

                                                            <DisplayFormikState {...props} />
                                                        </form>
                                                    );
                                                }}
                                            </Formik>
                                        </div>
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
export default Profile;
