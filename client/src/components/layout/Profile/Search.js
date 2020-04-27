import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Formik} from "formik";
import TagsInput from "react-tagsinput";
import {DisplayFormikState} from "../helperFormik";
import {getUsers} from "../../../api/profileApi";

const Search = () => {
    const user = useSelector(state => state.auth.user);
    const [users, searchusers] = useState([]);


    useEffect(() => {


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
                                    console.log(data);
                                    searchusers(data);
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

                                        <DisplayFormikState {...props} />
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container-fluid */}
            </section>
        </div>
    );

};
export default Search;
