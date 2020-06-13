import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Formik} from "formik";
import TagsInput from "react-tagsinput";
import {getUsers} from "../../../api/profileApi";

const Search = () => {
    const user = useSelector(state => state.auth.user);
    const [users, searchusers] = useState([]);
    const [searchLinked, setSearchLinked] = useState([]);
    const [search, setSearch] = useState([]);


    useEffect(() => {
        console.log(users)
        if (users.local) {
            let searchUsers = users.local.map(function (candidat) {
                let profile = "";
                if (candidat !== null) {
                    profile = "/profile" + candidat._id;

                }
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
                            <a href={profile} className="btn btn-sm btn-primary">
                                <i className="fas fa-user"/> Voire Profile
                            </a>
                        </div>
                    </div>
                </div>
            });
            setSearch(searchUsers);
        }
        if (users.linkedIn) {

            let searchUsersLinked = users.linkedIn.map(function (candidat) {
                let profile = "";
                if (candidat.details?.imgUrl) {
                    profile = candidat.details.imgUrl;

                }
                return <div className="col-3 col-sm-6 col-md-4 d-flex align-items-stretch">
                    <div className="card bg-light">
                        <div className="card-header text-muted border-bottom-0">
                            {candidat.jobProfil}
                        </div>
                        <div className="card-body pt-0">
                            <div className="row">
                                <div className="col-7">
                                    <h2 className="lead"><b>{candidat.NomProfil}</b></h2>
                                    <p className="text-muted text-sm"><b>About: </b> Web
                                        Designer / UX /
                                        Graphic Artist / Coffee Lover </p>
                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                        <li className="small"><span className="fa-li"><i
                                            className="fas fa-lg fa-building"/></span> Address:
                                            {candidat.addressProfil}
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-5 text-center">
                                    <img src={profile} alt=""
                                         className="img-circle img-fluid"/>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href={candidat.ItemURL} className="btn btn-sm btn-primary">
                                <i className="fas fa-user"/> Voire Profile
                            </a>
                        </div>
                    </div>
                </div>
            });
            setSearchLinked(searchUsersLinked);
        }


    }, [users]);
    //userProfile.skills=["hello"];

    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Chercher</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">Checrche</li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
            <section className="content">
                <div className="container-fluid">

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Recherche</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{
                                        name: "",
                                        occupation: "",
                                        address: "",
                                        skills: [],
                                        softSkills: [],

                                    }}
                                    onSubmit={async values => {

                                        let valuesSubmit = {};
                                        alert(JSON.stringify(values, null, 2));
                                        if (values.name !== "") {
                                            valuesSubmit.name = values.name;
                                        }
                                        if (values.occupation !== "") {
                                            valuesSubmit.occupation = values.occupation;
                                        }
                                        if (values.skills.length !== 0) {
                                            valuesSubmit.skills = values.skills;
                                        }
                                        if (values.softSkills.length !== 0) {
                                            valuesSubmit.softSkills = values.softSkills;
                                        }

                                        await new Promise(resolve => setTimeout(resolve, 500));
                                        alert(JSON.stringify(valuesSubmit, null, 2));
                                        await getUsers(valuesSubmit).then((data) => {
                                            //console.log(data);
                                            searchusers(data);
                                            console.log("****************", users);
                                        });

                                        //alert(JSON.stringify(values, null, 2));
                                        console.log()
                                    }}
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
                                                    <label htmlFor="occupation">ocuupation</label>
                                                    <input
                                                        id="occupation"
                                                        placeholder="saisie l'occupation"
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
                                                    <label htmlFor="skills">Compétance technique</label>
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

                                                {/*<DisplayFormikState {...props} />*/}
                                            </form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Resultat Utilisateur Local</h3>
                        </div>
                        <div className="card-body pb-0">
                            <div className="row d-flex align-items-stretch">
                                {search}
                            </div>
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Resultat Sur LinkedIn</h3>
                        </div>
                        <div className="card-body pb-0">
                            {searchLinked}
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>


                </div>

                {/* /.container-fluid */}
            </section>
        </div>
    );

};
export default Search;
